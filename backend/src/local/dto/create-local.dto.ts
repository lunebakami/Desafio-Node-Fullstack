import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEmail,
  Length,
  IsNotEmpty,
  IsInt,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateLocalDto {
  @ApiProperty({ example: 'Show House' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'House' })
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({ example: '00.000.000/0000-00' })
  @IsString()
  @Length(14, 14) // CNPJ tem 14 caracteres
  @IsNotEmpty()
  cnpj: string;

  @ApiProperty({ example: 'Fortaleza' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Ceará' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: '00000-000' })
  @IsString()
  @Length(8, 8) // CEP tem 8 caracteres
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Street 1' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'Complement' })
  @IsString()
  @IsOptional()
  complement?: string;

  @ApiProperty({ example: 'email@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '85999999999' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  localTypeId: number;

  @ApiProperty({ example: ['entry1', 'entry2'] })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  entries: string[];

  @ApiProperty({ example: ['turnstile1', 'turnstile2'] })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  turnstiles: string[];
}
