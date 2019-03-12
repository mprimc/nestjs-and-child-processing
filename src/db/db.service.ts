import { Injectable } from '@nestjs/common';
import { Cat } from '../cats/cat.interface';
import { random } from 'lodash';
// tslint:disable-next-line:no-var-requires
const faker = require('faker');

@Injectable()
export class DbService {
  async fetchCats(): Promise<Cat[]> {
    // db connection and heavy manipulation with data, simulating with 2sec delay
    const catsNum = random(1, 10);
    const cats = [];
    for (let i = 0; i < catsNum; i++) {
      cats.push({
        name: faker.name.firstName(),
        age: random(1, 6),
        bread: faker.random.arrayElement([
          'Peterbald',
          'Devon Rex',
          'Manx',
          'Abyssinian',
          'Bengal',
          'Bombay',
        ]),
      });
    }
    return new Promise(resolve => {
      setTimeout(() => resolve(cats), 2000);
    });
  }
}
