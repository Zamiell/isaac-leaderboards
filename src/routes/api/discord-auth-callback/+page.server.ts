import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const REDIRECT_URI = "http://localhost:5173/api/discord/auth-callback";

export const load: PageServerLoad = async ({ locals, url }) => {
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

    const discordAccessToken = tokenData.access_token;
    if (typeof discordAccessToken !== "string") {
      throw error(
        401,
        "The access token returned from Discord was not a string.",
      );
    }

    locals.discordAccessToken = discordAccessToken;
    locals.shouldSetCookie = true;

    // TODO: redirect from where we came from
    throw redirect(307, "/");
  } catch (err) {
    console.error(err);
    throw error(
      401,
      "Something went wrong when trying to get your Discord ID.",
    );
  }
};
