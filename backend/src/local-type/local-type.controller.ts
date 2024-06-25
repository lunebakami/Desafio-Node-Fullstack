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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalType } from './entities/local-type.entity';

@ApiTags('local type')
@Controller('local-type')
export class LocalTypeController {
  constructor(private readonly localTypeService: LocalTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create local type' })
  @ApiResponse({
    status: 201,
    description: 'The created local type.',
    type: LocalType,
  })
  create(@Body() createLocalTypeDto: CreateLocalTypeDto) {
    return this.localTypeService.create(createLocalTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all local types' })
  @ApiResponse({
    status: 200,
    description: 'All local types.',
    type: [LocalType],
  })
  findAll() {
    return this.localTypeService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get local type by id' })
  @ApiResponse({
    status: 200,
    description: 'The local type.',
    type: LocalType,
  })
  findOne(@Param('id') id: string) {
    return this.localTypeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update local type by id' })
  @ApiResponse({
    status: 200,
    description: 'The updated local type.',
    type: LocalType,
  })
  update(
    @Param('id') id: string,
    @Body() updateLocalTypeDto: UpdateLocalTypeDto,
  ) {
    return this.localTypeService.update(+id, updateLocalTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete local type by id' })
  @ApiResponse({
    status: 200,
    description: 'The deleted local type.',
    type: LocalType,
  })
  remove(@Param('id') id: string) {
    return this.localTypeService.remove(+id);
  }
}
