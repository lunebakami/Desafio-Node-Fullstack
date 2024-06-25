import { Injectable } from '@nestjs/common';
import { CreateLocalDto } from './dto/create-local.dto';
import { UpdateLocalDto } from './dto/update-local.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocalService {
  constructor(private prisma: PrismaService) { }

  create(createLocalDto: CreateLocalDto) {
    return this.prisma.local.create({
      data: createLocalDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.LocalOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params;

    return this.prisma.local.findMany({
      skip,
      take,
      orderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.local.findUnique({
      where: { id },
    });
  }

  update(id: string, updateLocalDto: UpdateLocalDto) {
    return this.prisma.local.update({
      where: { id },
      data: updateLocalDto,
    });
  }

  remove(id: string) {
    return this.prisma.local.delete({
      where: { id },
    });
  }
}
