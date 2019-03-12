import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatModule {}
