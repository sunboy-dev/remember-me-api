-- CreateTable
CREATE TABLE "public"."TblNote" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TblNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TblNoteSchedule" (
    "id" TEXT NOT NULL,
    "noteId" TEXT NOT NULL,
    "remindAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TblNoteSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TblNoteSchedule_noteId_idx" ON "public"."TblNoteSchedule"("noteId");

-- AddForeignKey
ALTER TABLE "public"."TblNoteSchedule" ADD CONSTRAINT "TblNoteSchedule_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "public"."TblNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;
