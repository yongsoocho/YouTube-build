import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);	// Express Object
  await app.listen(3000);
	// app.use() can use
}
bootstrap();
