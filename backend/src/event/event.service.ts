import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }

  create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({
      data: createEventDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.EventOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params;

    return this.prisma.event.findMany({
      skip,
      take,
      orderBy
    });
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  findUnique(params: {
    where: Prisma.EventWhereInput;
  }) {
    const { where } = params;

    return this.prisma.event.findFirst({
      where
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  remove(id: string) {
    return this.prisma.event.delete({
      where: { id },
    });
  }
}
