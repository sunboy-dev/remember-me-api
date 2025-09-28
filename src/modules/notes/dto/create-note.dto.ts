import { Frequency } from "src/enum/frequency";

export class CreateNoteDto {
  title: string;
  description: string;
  schedule: CreateNoteScheduleDto;
}

class CreateNoteScheduleDto {
  remindAt: Date;
  frequency: Frequency;
  dayOfWeek?: string;
  dayOfMonth?: string;
  startDate: Date;
  endDate?: Date;

}
