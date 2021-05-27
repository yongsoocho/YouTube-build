import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
// import * as express from 'express';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);	// Express Object]
	app.use(cookieParser());
	app.enableCors({
		origin:'https://ytfront.run.goorm.io',
		credentials:true
	});
	// app.use('/', express.static('upload'));
  await app.listen(PORT);
	// app.use() can use
}
bootstrap();
