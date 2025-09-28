/*
  Warnings:

  - Added the required column `startDate` to the `TblNoteSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Frequency" AS ENUM ('ONCE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- AlterTable
ALTER TABLE "public"."TblNoteSchedule" ADD COLUMN     "endDate" TIMESTAMP(3),
ADD COLUMN     "frequency" "public"."Frequency" NOT NULL DEFAULT 'ONCE',
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
