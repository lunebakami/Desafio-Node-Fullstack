import { IsNotEmpty, IsString } from "class-validator";

export class CreateLocalTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
