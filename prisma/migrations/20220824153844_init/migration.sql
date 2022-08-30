/*
  Warnings:

  - You are about to drop the column `datetimeCreated` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `datetimeLastLogin` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "datetimeCreated",
DROP COLUMN "datetimeLastLogin",
ADD COLUMN     "dateTimeCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateTimeLastLogin" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
