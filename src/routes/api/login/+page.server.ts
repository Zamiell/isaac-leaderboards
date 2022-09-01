import { DISCORD_CLIENT_ID } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import { REDIRECT_URI } from "../discord-auth-callback/+page.server";

export function load(): void {
  throw redirect(
    307,
    `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${DISCORD_CLIENT_ID}&scope=identify&redirect_uri=${REDIRECT_URI}`,
  );
}
