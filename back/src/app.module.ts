import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { GlobalModule } from './global/global.module';
import { LoggerMiddleware } from './middleware/auth.middleware';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';

const URL = 'mongodb+srv://admin:0302@cluster0.xgmno.mongodb.net/test?retryWrites=true&w=majority'

@Module({
  imports: [UserModule, 
						VideoModule,
						GlobalModule,
						MongooseModule.forRoot(URL, { 
							useFindAndModify:false, 
							useCreateIndex:true 
						})
					 ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UserController);
  }
}
