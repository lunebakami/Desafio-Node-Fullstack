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
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;

  @IsString()
  @Length(14, 14) // CNPJ tem 14 caracteres
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @Length(8, 8) // CEP tem 8 caracteres
  @IsNotEmpty()
  cep: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsOptional()
  complement?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsInt()
  @IsNotEmpty()
  localTypeId: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  entries: string[];

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  turnstiles: string[];
}
