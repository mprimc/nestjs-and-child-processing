import { Module } from '@nestjs/common';
import { CatModule } from './cats/cats.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [CatModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
