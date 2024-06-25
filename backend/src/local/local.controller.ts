import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Local } from './entities/local.entity';

@ApiTags('local')
@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  @ApiOperation({ summary: 'Create local' })
  @ApiResponse({
    status: 201,
    description: 'The created local.',
    type: Local,
  })
  create(@Body() createLocalDto: CreateLocalDto) {
    const { entries, turnstiles } = createLocalDto;

    return this.localService.create({
      ...createLocalDto,
      entries: JSON.stringify(entries),
      turnstiles: JSON.stringify(turnstiles),
    });
  }

  @Get()
  @ApiOperation({ summary: 'Get all locals' })
  @ApiResponse({
    status: 200,
    description: 'All locals.',
    type: [Local],
  })
  findAll() {
    return this.localService.findAll({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get local by id' })
  @ApiResponse({
    status: 200,
    description: 'The local.',
    type: Local,
  })
  findOne(@Param('id') id: string) {
    return this.localService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update local by id' })
  @ApiResponse({
    status: 200,
    description: 'The updated local.',
    type: Local,
  })
  update(@Param('id') id: string, @Body() updateLocalDto: UpdateLocalDto) {
    const { entries, turnstiles, ...data } = updateLocalDto;

    let updateData = {};

    if (entries) {
      updateData = {
        entries: JSON.stringify(entries),
      };
    }

    if (turnstiles) {
      updateData = {
        ...updateData,
        turnstiles: JSON.stringify(turnstiles),
      };
    }

    return this.localService.update(id, {
      ...data,
      ...updateData,
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete local by id' })
  @ApiResponse({
    status: 200,
    description: 'The deleted local.',
    type: Local,
  })
  remove(@Param('id') id: string) {
    return this.localService.remove(id);
  }
}
