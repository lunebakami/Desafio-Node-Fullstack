import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LocalTypeController } from './local-type/local-type.controller';
import { LocalTypeService } from './local-type/local-type.service';
import { LocalTypeModule } from './local-type/local-type.module';
import { EventTypeModule } from './event-type/event-type.module';

@Module({
  imports: [LocalTypeModule, EventTypeModule],
  controllers: [AppController, LocalTypeController],
  providers: [AppService, LocalTypeService, PrismaService],
})
export class AppModule { }
