import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ApiBody, ApiResponse, ApiSchema } from '@nestjs/swagger';
import { CreateNoteResponseDto } from './dto/create-note-response.dto';
import { BaseResponse } from 'src/common/dto/base-response.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) { }

  @Post()
  @ApiBody({
    type: CreateNoteDto, examples: {
      example1: {
        summary: 'Create Note Example',
        value: {
          title: 'Meeting Reminder',
          description: 'Reminder for the team meeting',
          schedule: {
            remindAt: '2024-10-01T10:00:00Z',
            frequency: 'ONCE',
            startDate: '2024-10-01T10:00:00Z',
            endDate: '2024-10-01T10:00:00Z'
          }
        }
      },
      example2: {
        summary: 'Create Recurring Note Example',
        value: {
          title: 'Weekly Sync',
          description: 'Weekly team sync-up meeting',
          schedule: {
            remindAt: '2024-10-01T09:00:00Z',
            frequency: 'WEEKLY',
            dayOfWeek: 'Monday',
            startDate: '2024-10-01T09:00:00Z',
            endDate: '2025-10-01T09:00:00Z'
          }
        }
      }
    }
  })
  @ApiResponse({ status: 201, description: 'The note has been successfully created.', type: CreateNoteResponseDto, example: { id: 1, title: 'Meeting Reminder' } })
  create(@Body() request: CreateNoteDto) {
    return this.notesService.create(request);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
