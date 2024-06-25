import {
  HttpStatus,
  HttpException,
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

@Controller('local')
export class LocalController {
  constructor(private readonly localService: LocalService) {}

  @Post()
  create(@Body() createLocalDto: CreateLocalDto) {
    const { entries, turnstiles } = createLocalDto;

    return this.localService.create({
      ...createLocalDto,
      entries: JSON.stringify(entries),
      turnstiles: JSON.stringify(turnstiles),
    });
  }

  @Get()
  findAll() {
    return this.localService.findAll({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.localService.findOne(id);
  }

  @Patch(':id')
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
  remove(@Param('id') id: string) {
    return this.localService.remove(id);
  }
}
