import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalTypeDto } from './create-local-type.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocalTypeDto extends PartialType(CreateLocalTypeDto) {
  @ApiProperty({ example: 'Public', description: 'The type of location' })
  name?: string;
}
