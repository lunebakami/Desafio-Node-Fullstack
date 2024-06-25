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
  Query,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

@ApiTags('events')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @ApiOperation({ summary: 'Create event' })
  @ApiResponse({
    status: 201,
    description: 'The created event.',
    type: Event,
  })
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
  @ApiOperation({ summary: 'Get all events' })
  @ApiResponse({
    status: 200,
    description: 'All events.',
    type: [Event],
  })
  findAll(
    @Query()
    query: {
      page?: number;
      quantity?: number;
      orderBy?: Prisma.EventOrderByWithRelationInput;
    },
  ) {
    const { page, quantity, orderBy } = query;

    // Page starts at 1
    let pageInt = page ? parseInt(page.toString()) : 0;
    pageInt = pageInt < 1 ? 1 : pageInt;

    // Default quantity is 10
    const quantityInt = quantity ? parseInt(quantity.toString()) : 10;

    const skip = pageInt ? (pageInt - 1) * quantityInt : 0;

    return this.eventService.findAll({
      skip,
      take: quantityInt,
      orderBy,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get event by id' })
  @ApiResponse({
    status: 200,
    description: 'The event.',
    type: Event,
  })
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update event by id' })
  @ApiResponse({
    status: 200,
    description: 'The updated event.',
    type: Event,
  })
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
          AND: [
            { localId: updateEventDto.localId },
            { date: updateEventDto.date },
          ],
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
  @ApiOperation({ summary: 'Delete event by id' })
  @ApiResponse({
    status: 200,
    description: 'The deleted event.',
    type: Event,
  })
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
