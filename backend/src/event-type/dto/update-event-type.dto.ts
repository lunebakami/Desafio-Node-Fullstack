import { PartialType } from '@nestjs/mapped-types';
import { CreateEventTypeDto } from './create-event-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {
  @ApiProperty({ example: 'Show', description: 'The type of event' })
  name: string;
}
