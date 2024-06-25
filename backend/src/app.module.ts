import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LocalTypeController } from './local-type/local-type.controller';
import { LocalTypeService } from './local-type/local-type.service';
import { LocalTypeModule } from './local-type/local-type.module';
import { EventTypeModule } from './event-type/event-type.module';
import { LocalModule } from './local/local.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [LocalTypeModule, EventTypeModule, LocalModule, EventModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
