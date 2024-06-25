import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @ApiProperty({ example: 'Show House' })
  name: string;

  @ApiProperty({ example: '2021-10-14T00:00:00.000Z' })
  date: Date;

  @ApiProperty({ example: '18caac11-7f0d-4420-b1c5-4a593e083b32' })
  localId: string;

  @ApiProperty({ example: 1 })
  eventTypeId: number;

  @ApiProperty({ example: 'email@email.com' })
  email: string;

  @ApiProperty({ example: '85999999999' })
  phone: string;
}
