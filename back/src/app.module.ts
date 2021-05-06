import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { GlobalModule } from './global/global.module';

import { MongooseModule } from '@nestjs/mongoose';

const MONGO_URL = 'mongodb+srv://admin:0302@cluster0.xgmno.mongodb.net/YouTube?retryWrites=true&w=majority'

@Module({
  imports: [UserModule, 
						VideoModule, 
						GlobalModule,
						MongooseModule.forRoot(MONGO_URL)
					 ]
})
export class AppModule {}
