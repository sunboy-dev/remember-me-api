import { CreateNoteScheduleDto } from "./create-note.dto";

export class NoteResponseDto {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  schedule: CreateNoteScheduleDto;
}