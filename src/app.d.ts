// https://kit.svelte.dev/docs/types#app
declare namespace App {
  interface Locals {
    userID: string;
  }

  /** Must match the ".env.example" file. */
  interface PrivateEnv {
    DATABASE_URL: string;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
  }
}
