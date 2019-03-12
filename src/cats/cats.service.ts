import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { DbService } from 'src/db/db.service';
import { ChildProcessService } from 'src/child-process/child-process.service';

@Injectable()
export class CatsService {
  constructor(
    private readonly dbService: DbService,
    private readonly childProcessService: ChildProcessService,
  ) {}
  private readonly cats: Cat[] = [];

  async findAll(): Promise<Cat[]> {
    this.childProcessService.forkChildFile();

    return await this.dbService.fetchCats();
  }
}
