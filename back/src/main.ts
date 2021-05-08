import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);	// Express Object
  await app.listen(PORT);
	// app.use() can use
}
bootstrap();
