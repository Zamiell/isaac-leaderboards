-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "discordID" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "normalizedUsername" TEXT NOT NULL,
    "lastIP" TEXT NOT NULL,
    "datetimeCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "datetimeLastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStreaks" (
    "id" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "character" INTEGER NOT NULL,
    "goal" TEXT NOT NULL,
    "streakNumCurrent" INTEGER NOT NULL,
    "streakNumBest" INTEGER NOT NULL,

    CONSTRAINT "UserStreaks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_discordID_key" ON "User"("discordID");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_normalizedUsername_key" ON "User"("normalizedUsername");

-- CreateIndex
CREATE UNIQUE INDEX "UserStreaks_userID_character_goal_key" ON "UserStreaks"("userID", "character", "goal");

-- AddForeignKey
ALTER TABLE "UserStreaks" ADD CONSTRAINT "UserStreaks_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
