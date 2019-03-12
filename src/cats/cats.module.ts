import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatModule {}
