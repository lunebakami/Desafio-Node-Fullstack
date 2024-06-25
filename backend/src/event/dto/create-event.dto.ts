import { IsString, IsEmail, IsDateString, IsUUID, IsInt, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @IsUUID()
  @IsNotEmpty()
  localId: string;

  @IsInt()
  @IsNotEmpty()
  eventTypeId: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
}

