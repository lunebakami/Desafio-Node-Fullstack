import { Injectable } from '@nestjs/common';
import { CreateLocalTypeDto } from './dto/create-local-type.dto';
import { UpdateLocalTypeDto } from './dto/update-local-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocalTypeService {
  constructor(private prisma: PrismaService) { }

  async create(createLocalTypeDto: CreateLocalTypeDto) {
    return this.prisma.localType.create({
      data: createLocalTypeDto,
    });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.LocalTypeOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params;

    return this.prisma.localType.findMany({
      skip,
      take,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.localType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLocalTypeDto: UpdateLocalTypeDto) {
    return this.prisma.localType.update({
      where: { id },
      data: updateLocalTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.localType.delete({
      where: { id },
    });
  }
}
