import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DbModule } from 'src/db/db.module';
import { ChildProcessModule } from 'src/child-process/child-process.module';

@Module({
  imports: [DbModule, ChildProcessModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatModule {}
