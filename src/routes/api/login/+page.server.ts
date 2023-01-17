import { DISCORD_CLIENT_ID } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import { DISCORD_AUTH_REDIRECT_URI } from "../../../constants";

export function load(): void {
  throw redirect(
    307,
    `https://discord.com/api/oauth2/authorize?response_type=code&client_id=${DISCORD_CLIENT_ID}&scope=identify&redirect_uri=${DISCORD_AUTH_REDIRECT_URI}`,
  );
}
