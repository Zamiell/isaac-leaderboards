import { SESSION_KEY } from "$env/static/private";
import type { Handle, RequestEvent } from "@sveltejs/kit";
import * as cookie from "cookie";
import aes from "crypto-js/aes";

const COOKIE_NAME = "discordAccessToken";

export const handle: Handle = async ({ event, resolve }) => {
  beforeRouteLogic(event);

  const response = await resolve(event);

  return afterRouteLogic(event, response);
};

function beforeRouteLogic(event: RequestEvent) {
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

  event.locals.discordAccessToken = discordAccessToken.toString();
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
