import { ApiProperty } from "@nestjs/swagger";

export class Local {
  @ApiProperty({ example: '18caac11-7f0d-4420-b1c5-4a593e083b32', description: 'The uuid of the local' })
  id: string;
  
  @ApiProperty({ example: 'Local', description: 'The name of the local' })
  name: string;
  
  @ApiProperty({ example: 'Local', description: 'The nickname of the local' })
  nickname: string;

  @ApiProperty({ example: 'Local', description: 'The cnpj of the local' })
  cnpj: string;
  
  @ApiProperty({ example: 'Local', description: 'The city of the local' })
  city: string;
  
  @ApiProperty({ example: 'Local', description: 'The state of the local' })
  state: string;

  @ApiProperty({ example: 'Local', description: 'The cep of the local' })
  cep: string;

  @ApiProperty({ example: 'Local', description: 'The address of the local' })
  address: string;

  @ApiProperty({ example: 'Local', description: 'The number of the local' })
  complement?: string;
  
  @ApiProperty({ example: 'Local', description: 'The email of the local' })
  email: string;
  
  @ApiProperty({ example: 'Local', description: 'The phone of the local' })
  phone: string;
  
  @ApiProperty({ example: 1, description: 'The id of the type of location' })
  localTypeId: number;

  @ApiProperty({ example: 'Local', description: 'The type of location' })
  entries: string;

  @ApiProperty({ example: 'Local', description: 'The type of location' })
  turnstiles: string;
}
