import { Module } from '@nestjs/common';
import { LocalTypeService } from './local-type.service';
import { LocalTypeController } from './local-type.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LocalTypeController],
  providers: [LocalTypeService, PrismaService],
})
export class LocalTypeModule {}
