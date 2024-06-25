import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalTypeDto } from './create-local-type.dto';

export class UpdateLocalTypeDto extends PartialType(CreateLocalTypeDto) {}
