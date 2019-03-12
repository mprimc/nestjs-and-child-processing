import { Controller, Get } from '@nestjs/common';
import { Cat } from './cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }
}
