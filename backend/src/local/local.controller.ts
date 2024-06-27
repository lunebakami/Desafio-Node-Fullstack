import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LocalService } from './local.service';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Local } from './entities/local.entity';
import { Prisma } from '@prisma/client';

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
  findAll(
    @Query()
    query: {
      page?: number;
      quantity?: number;
      orderBy?: Prisma.LocalOrderByWithRelationInput;
    },
  ) {
    const { page, quantity, orderBy } = query;

    if (!page) {
      return this.localService.findAll({});
    }

    // Page starts at 1
    let pageInt = page ? parseInt(page.toString()) : 0;
    pageInt = pageInt < 1 ? 1 : pageInt;

    // Default quantity is 10
    const quantityInt = quantity ? parseInt(quantity.toString()) : 10;

    const skip = pageInt ? (pageInt - 1) * quantityInt : 0;

    return this.localService.findAll({
      skip,
      take: quantityInt,
      orderBy,
    });
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
