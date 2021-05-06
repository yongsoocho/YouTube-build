import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

import { MongooseModule } from '@nestjs/mongoose';
import { VideoSchema } from './schemas/video.schema';
import { CommentSchema } from './schemas/comment.schema';

@Module({
	imports: [
		MongooseModule.forFeature(
			[
				{ name: 'Video', schema: VideoSchema },
			]
		),
		MongooseModule.forFeature(
			[
				{ name: 'Comment', schema: CommentSchema },
			]
		),
	],
	controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
