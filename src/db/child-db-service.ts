import { NestFactory } from '@nestjs/core';
import { DbModule } from './db.module';
import { DbService } from './db.service';

// tslint:disable:no-console
let service = null;
async function bootstrap() {
  const app = await NestFactory.create(DbModule);
  await app.listen(3001);
  service = app.select(DbModule).get(DbService, { strict: true });

  process.on('message', async msg => {
    console.log('[ChildDBService] Message from parent:', msg);
    console.log('[ChildDBService] calling fetch cats');
    const cats = await service.fetchCats();
    process.send(cats);
  });
}
bootstrap();
