import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EventTypeService {
  constructor(private prisma: PrismaService) { }

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.prisma.eventType.create({
      data: createEventTypeDto,
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    orderBy?: Prisma.EventTypeOrderByWithRelationInput;
  }) {
    const { skip, take, orderBy } = params;

    return this.prisma.eventType.findMany({
      skip,
      take,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.eventType.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.prisma.eventType.update({
      where: { id },
      data: updateEventTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.eventType.delete({
      where: { id },
    });
  }
}
