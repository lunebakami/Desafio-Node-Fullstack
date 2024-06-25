import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event-type.service';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventType } from './entities/event-type.entity';

@ApiTags('event type')
@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create event type' })
  @ApiResponse({
    status: 201,
    description: 'The created event type.',
    type: EventType,
  })
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all event types' })
  @ApiResponse({
    status: 200,
    description: 'All event types.',
    type: [EventType],
  })
  findAll() {
    return this.eventTypeService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get event type by id' })
  @ApiResponse({
    status: 200,
    description: 'The event type.',
    type: EventType,
  })
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update event type by id' })
  @ApiResponse({
    status: 200,
    description: 'The updated event type.',
    type: EventType,
  })
  update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete event type by id' })
  @ApiResponse({
    status: 200,
    description: 'The deleted event type.',
    type: EventType,
  })
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
