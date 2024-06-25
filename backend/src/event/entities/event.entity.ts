import { ApiProperty } from "@nestjs/swagger";

export class Event {
  @ApiProperty({ example: '18caac11-7f0d-4420-b1c5-4a593e083b32', description: 'The id of the event' })
  id: string;

  @ApiProperty({ example: 'Event', description: 'The name of the event' })
  name: string;

  @ApiProperty({ example: '2021-10-14T00:00:00.000Z' })
  date: Date;

  @ApiProperty({ example: 1, description: 'The uuid of the local' })
  eventTypeId: number;

  @ApiProperty({ example: '18caac11-7f0d-4420-b1c5-4a593e083b32', description: 'The uuid of the local' })
  localId: string;

  @ApiProperty({ example: 'email@email.com', description: 'The name of the local' })
  email: string;

  @ApiProperty({ example: '85999999999', description: 'The name of the local' })
  phone: string;
}
