// We extend the default auth library variables.
/// <reference types="@auth/sveltekit" />

declare global {
  // https://kit.svelte.dev/docs/types#app
  namespace App {
    /*
    interface Locals {
      session: Session<SessionData>;
      user: User | null;
    }
    */

    // Must match the ".env.example" file.
    interface PrivateEnv {
      IS_DEV: string;
      AUTH_SECRET: string; // https://authjs.dev/reference/sveltekit/modules/main#usage
      DATABASE_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
    }
  }
}
