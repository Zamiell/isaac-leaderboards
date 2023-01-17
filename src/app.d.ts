import { Session } from "svelte-kit-cookie-session";
import type { User } from "@prisma/client";
import type { SessionData } from "./interfaces/SessionData";

declare global {
  // https://kit.svelte.dev/docs/types#app
  namespace App {
    interface Locals {
      session: Session<SessionData>;
      user: User | null;
    }

    /** Must match the ".env.example" file. */
    interface PrivateEnv {
      SESSION_KEY: string;
      DATABASE_URL: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
    }
  }
}
