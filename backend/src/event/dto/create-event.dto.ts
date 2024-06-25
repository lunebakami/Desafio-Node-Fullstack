import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsDateString, IsUUID, IsInt, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ example: 'BrazilJS' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '2021-10-14T00:00:00.000Z' })
  @IsDateString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: '18caac11-7f0d-4420-b1c5-4a593e083b32' })
  @IsUUID()
  @IsNotEmpty()
  localId: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  eventTypeId: number;

  @ApiProperty({ example: 'email@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '85999999999' })
  @IsString()
  @IsNotEmpty()
  phone: string;
}

