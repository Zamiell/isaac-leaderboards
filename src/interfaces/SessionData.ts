import type { User } from "@prisma/client";

export interface SessionData {
  discordAccessToken?: string;
  user?: User;
}
