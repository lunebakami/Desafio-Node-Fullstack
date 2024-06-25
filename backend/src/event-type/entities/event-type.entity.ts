import { ApiProperty } from '@nestjs/swagger';

export class EventType {
  @ApiProperty({ example: 1, description: 'The id of the type of event' })
  id: number;

  @ApiProperty({ example: 'Public', description: 'The type of event' })
  name: string;
}
