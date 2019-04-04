import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { DbService } from '../db/db.service';
import { ChildProcessService } from '../child-process/child-process.service';

// tslint:disable:no-console
@Injectable()
export class CatsService {
  constructor(
    private readonly dbService: DbService,
    private readonly childProcessService: ChildProcessService,
  ) {}
  private forkedDBModuleApp = null;
  private cats: Cat[] = [];

  async findAll(): Promise<Cat[]> {
    this.childProcessService.forkChildFile();

    if (!this.forkedDBModuleApp) {
      this.forkedDBModuleApp = this.childProcessService.getForkedNestJsDBModuleApp();
      this.forkedDBModuleApp.on('message', cats => {
        console.log('Received cats from ChildDBService', cats);
        this.cats = cats;
      });
    }
    if (this.cats.length === 0) {
      console.log('Calling fetch cats from cats service');
      this.cats = await this.dbService.fetchCats();
      return this.cats;
    }
    this.forkedDBModuleApp.send('fetch cats from db');
    return this.cats;
  }
}
