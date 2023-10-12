import type { User } from "@prisma/client";
import { transliterate } from "transliteration";
import { db } from "./database.js";

export async function exists(username: string): Promise<boolean> {
  const normalizedUsername = normalizeUsername(username);
  const userCount = await db.user.count({
    where: {
      normalizedUsername,
    },
  });

  return userCount > 0;
}

export async function get(discordID: string): Promise<User | null> {
  const user = db.user.findFirst({
    where: {
      discordID,
    },
  });

  return user;
}

export async function create(
  discordID: string,
  username: string,
  ip: string,
): Promise<User> {
  const normalizedUsername = normalizeUsername(username);
  const user = await db.user.create({
    data: {
      discordID,
      username,
      normalizedUsername,
      lastIP: ip,
    },
  });

  return user;
}

export async function setIP(discordID: string, ip: string): Promise<void> {
  await db.user.update({
    where: {
      discordID,
    },
    data: {
      lastIP: ip,
    },
  });
}

/**
 * We use the "transliteration" library to convert Unicode characters to ASCII. This prevents having
 * a user of "Alice" and "Alicè", for example.
 */
function normalizeUsername(username: string) {
  const asciiUsername = transliterate(username);
  return asciiUsername.toLowerCase();
}
