import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    const date = new Date(createEventDto.date);

    if (date < new Date()) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'date must be a future ISO 8601 date string',
          error: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const { localId } = createEventDto;
    const eventsInSameDateAndLocal = await this.eventService.findUnique({
      where: {
        AND: [{ localId }, { date: createEventDto.date }],
      },
    });

    if (eventsInSameDateAndLocal) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'There is already an event in the same date and local',
          error: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.eventService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    if (updateEventDto.date) {
      const date = new Date(updateEventDto.date);

      if (date < new Date()) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: 'date must be a future ISO 8601 date string',
            error: 'Bad Request',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (updateEventDto.date && updateEventDto.localId) {
      const eventsInSameDateAndLocal = this.eventService.findUnique({
        where: {
          AND: [{ localId: updateEventDto.localId }, { date: updateEventDto.date }],
        },
      });

      if (eventsInSameDateAndLocal) {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            message: 'There is already an event in the same date and local',
            error: 'Bad Request',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }


    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
