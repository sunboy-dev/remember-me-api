-- AlterTable
ALTER TABLE "public"."TblNoteSchedule" ADD COLUMN     "dayOfMonth" TEXT DEFAULT '*',
ADD COLUMN     "dayOfWeek" TEXT DEFAULT '*';
