import { Module } from '@nestjs/common';
import { CatModule } from './cats/cats.module';
import { DbModule } from './db/db.module';
import { ChildProcessModule } from './child-process/child-process.module';

@Module({
  imports: [CatModule, DbModule, ChildProcessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
