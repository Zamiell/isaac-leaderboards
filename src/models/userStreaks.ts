import type { UserStreak } from "@prisma/client";
import type { Goal } from "../enums/Goal.js";
import type { PlayerType } from "../enums/PlayerType.js";
import { db } from "./database.js";

export async function getLeaderboard(
  character: PlayerType,
  goal: Goal,
): Promise<UserStreak[]> {
  const user = db.userStreak.findMany({
    where: {
      character,
      goal,
    },
    orderBy: {
      streakNumBest: "desc",
    },
    take: 100,
  });

  return user;
}
