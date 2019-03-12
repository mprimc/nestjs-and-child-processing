import { Module } from '@nestjs/common';
import { DbService } from './db.service';

@Module({
  providers: [DbService],
  controllers: [],
  exports: [DbService],
})
export class DbModule {}
