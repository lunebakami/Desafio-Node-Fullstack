import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param, 
  Delete,
} from '@nestjs/common';
import { LocalTypeService } from './local-type.service';
import { CreateLocalTypeDto } from './dto/create-local-type.dto';
import { UpdateLocalTypeDto } from './dto/update-local-type.dto';

@Controller('local-type')
export class LocalTypeController {
  constructor(private readonly localTypeService: LocalTypeService) {}

  @Post()
  create(@Body() createLocalTypeDto: CreateLocalTypeDto) {
    return this.localTypeService.create(createLocalTypeDto);
  }

  @Get()
  findAll() {
    return this.localTypeService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocalTypeDto: UpdateLocalTypeDto,
  ) {
    return this.localTypeService.update(+id, updateLocalTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.localTypeService.remove(+id);
  }
}
