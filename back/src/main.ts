import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);	// Express Object]
	app.enableCors();
  await app.listen(PORT);
	// app.use() can use
}
bootstrap();
