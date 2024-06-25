import { ApiProperty } from '@nestjs/swagger';

export class LocalType {
  @ApiProperty({ example: 1, description: 'The id of the type of location' })
  id: number;

  @ApiProperty({ example: 'Public', description: 'The type of location' })
  name: string;
}
