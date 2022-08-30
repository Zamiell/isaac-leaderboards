/*
  Warnings:

  - You are about to drop the `UserStreaks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserStreaks" DROP CONSTRAINT "UserStreaks_userID_fkey";

-- DropTable
DROP TABLE "UserStreaks";

-- CreateTable
CREATE TABLE "UserStreak" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "character" INTEGER NOT NULL,
    "goal" TEXT NOT NULL,
    "streakNumCurrent" INTEGER NOT NULL,
    "streakNumBest" INTEGER NOT NULL,

    CONSTRAINT "UserStreak_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserStreak_userID_character_goal_key" ON "UserStreak"("userID", "character", "goal");

-- AddForeignKey
ALTER TABLE "UserStreak" ADD CONSTRAINT "UserStreak_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
