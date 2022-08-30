// import * as models from "./models/index";
import { SESSION_KEY } from "$env/static/private";
import { error, type Handle, type RequestEvent } from "@sveltejs/kit";
import * as cookie from "cookie";
import aes from "crypto-js/aes";

const COOKIE_NAME = "discordAccessToken";

export const handle: Handle = async ({ event, resolve }) => {
  await beforeRouteLogic(event);

  const response = await resolve(event);

  return afterRouteLogic(event, response);
};

async function beforeRouteLogic(event: RequestEvent) {
  const cookieHeader = event.request.headers.get("cookie") ?? "";
  const cookies = cookie.parse(cookieHeader);
  const discordAccessTokenEncrypted = cookies[COOKIE_NAME];

  if (
    // The type definition for "cookie.parse" is bugged, as non-existent cookies will be undefined.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    discordAccessTokenEncrypted === undefined ||
    discordAccessTokenEncrypted === ""
  ) {
    event.locals.discordAccessToken = null;
    return;
  }

  const discordAccessToken = aes.decrypt(
    discordAccessTokenEncrypted,
    SESSION_KEY,
  );

  /// models.users.get();

  event.locals.discordAccessToken = discordAccessToken.toString();

  const userRes = await fetch("https://discord.com/api/v6/users/@me", {
    headers: {
      Authorization: `Bearer ${discordAccessToken}`,
    },
  });

  const userText = await userRes.text();
  if (!userRes.ok) {
    throw error(
      401,
      `Something went wrong when trying to get your Discord username: ${userText}.`,
    );
  }

  const userData = JSON.parse(userText) as Record<string, unknown>;

  console.log("GETTING HERE userData:", userData);
  // `userData` will be something like:
  /*
    {
      id: '71242588694249472',
      username: 'Zamiel',
      avatar: 'f9600b33eaab162d36ca7698d6d37987',
      avatar_decoration: null,
      discriminator: '8743',
      public_flags: 0,
      flags: 0,
      banner: null,
      banner_color: null,
      accent_color: null,
      locale: 'en-US',
      mfa_enabled: true,
      premium_type: 2
    }
  */

  // TODO: check for unique username
  // https://github.com/FGRibreau/node-unidecode/issues/16
}

function afterRouteLogic(event: RequestEvent, response: Response) {
  if (
    event.locals.shouldSetCookie &&
    event.locals.discordAccessToken !== null
  ) {
    const discordAccessTokenEncrypted = aes
      .encrypt(event.locals.discordAccessToken, SESSION_KEY)
      .toString();
    response.headers.set(
      "set-cookie",
      cookie.serialize(COOKIE_NAME, discordAccessTokenEncrypted, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: true,
      }),
    );
  }

  return response;
}
