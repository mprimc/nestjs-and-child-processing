import { Module } from '@nestjs/common';
import { ChildProcessService } from './child-process.service';

@Module({
  providers: [ChildProcessService],
  exports: [ChildProcessService],
})
export class ChildProcessModule {}
