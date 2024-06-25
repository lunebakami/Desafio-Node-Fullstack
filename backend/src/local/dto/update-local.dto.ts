import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalDto } from './create-local.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocalDto extends PartialType(CreateLocalDto) {

  @ApiProperty({ example: 'Show House' })
  name: string;

  @ApiProperty({ example: 'House' })
  nickname: string;

  @ApiProperty({ example: '00.000.000/0000-00' })
  cnpj: string;

  @ApiProperty({ example: 'Fortaleza' })
  city: string;

  @ApiProperty({ example: 'Ceará' })
  state: string;

  @ApiProperty({ example: '00000-000' })
  cep: string;

  @ApiProperty({ example: 'Street 1' })
  address: string;

  @ApiProperty({ example: 'Complement' })
  complement?: string;

  @ApiProperty({ example: 'email@email.com' })
  email: string;

  @ApiProperty({ example: '85999999999' })
  phone: string;

  @ApiProperty({ example: 1 })
  localTypeId: number;

  @ApiProperty({ example: ['entry1', 'entry2'] })
  entries: string[];

  @ApiProperty({ example: ['turnstile1', 'turnstile2'] })
  turnstiles: string[];
}
