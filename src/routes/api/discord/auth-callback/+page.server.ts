import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const REDIRECT_URI = "http://localhost:5173/api/discord/auth-callback";

export const load: PageServerLoad = async ({ url }) => {
  const code = url.searchParams.get("code");
  if (code === null || code === "") {
    throw error(401, "Invalid Discord authorization code.");
  }

  try {
    const tokenRes = await fetch("https://discordapp.com/api/oauth2/token", {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: new URLSearchParams({
        client_id: DISCORD_CLIENT_ID,
        client_secret: DISCORD_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    const tokenText = await tokenRes.text();
    if (!tokenRes.ok) {
      throw error(
        401,
        `Something went wrong when trying to get your Discord ID: ${tokenText}.`,
      );
    }

    const tokenData = JSON.parse(tokenText) as Record<string, unknown>;
    if (!("access_token" in tokenData)) {
      throw error(
        401,
        "Discord failed to return an access token from the token endpoint.",
      );
    }

    const accessToken = tokenData.access_token;

    const userRes = await fetch("https://discord.com/api/v6/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

    console.log("GETTING HERE 2:", userData);

    // TODO: redirect from where we came from
    throw redirect(307, "/");
  } catch (err) {
    console.log("GETTING HERE 3:", err);
    throw error(
      401,
      "Something went wrong when trying to get your Discord ID.",
    );
  }
};
