import { Injectable } from '@nestjs/common';
import { Cat } from './cat.interface';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CatsService {
  constructor(private readonly dbService: DbService) {}
  private readonly cats: Cat[] = [];

  async findAll(): Promise<Cat[]> {
    return await this.dbService.fetchCats();
    // return this.cats;
  }
}
