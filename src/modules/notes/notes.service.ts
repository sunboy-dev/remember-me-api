import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotesService {

  constructor(private prisma: PrismaService) { }
  create(createNoteDto: CreateNoteDto) {
    return this.prisma.note.create({
      data: {
        title: createNoteDto.title,
        description: createNoteDto.description,
        schedules: {
          create: {
            remindAt: createNoteDto.schedule.remindAt,
            frequency: createNoteDto.schedule.frequency,
            dayOfWeek: createNoteDto.schedule.dayOfWeek,
            dayOfMonth: createNoteDto.schedule.dayOfMonth,
            startDate: createNoteDto.schedule.startDate,
            endDate: createNoteDto.schedule.endDate,
          }
        }
      }
    });
  }

  findAll() {
    return `This action returns all notes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
