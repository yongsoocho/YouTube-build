import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { join } from 'path';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);	// Express Object
	app.use(cookieParser());
	app.enableCors({
		origin:'https://ytfront.run.goorm.io',
		credentials:true
	});
	app.use('/upload', express.static(join(__dirname, '../upload')));
  await app.listen(PORT);
	// app.use() can use
}
bootstrap();
