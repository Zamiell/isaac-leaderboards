import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private";
import { error, redirect } from "@sveltejs/kit";
import { DISCORD_AUTH_REDIRECT_URI } from "../../../constants.js";
import type { PageServerLoad } from "./$types";

/**
 * The user has just clicked "Authorize" on the "https://discord.com/oauth2/authorize" page to let
 * this application access their username, so now we will retrieve a token on their behalf.
 */
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
        redirect_uri: DISCORD_AUTH_REDIRECT_URI,
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

    console.log(locals);

    /*
    await locals.session.set({
      discordAccessToken,
    });
    */
  } catch (error_) {
    console.error(
      "Something went wrong when trying to get the Discord ID:",
      error_,
    );
    throw error(
      401,
      "Something went wrong when trying to get your Discord ID.",
    );
  }

  // The token retrieval was successful. It is now stored as a cookie. At this point, we do not know
  // if they have previously registered an account, so redirect them to the login page.
  throw redirect(307, "/login");
};
