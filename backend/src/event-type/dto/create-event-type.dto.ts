import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
  @ApiProperty({ example: 'Show' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
