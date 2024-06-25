import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LocalService {
  constructor(private prisma: PrismaService) { }

  create(createLocalDto: Prisma.LocalUncheckedCreateInput) {
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
      include: {
        type: true
      }
    });
  }

  update(id: string, updateLocalDto: Prisma.LocalUncheckedUpdateInput) {
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
