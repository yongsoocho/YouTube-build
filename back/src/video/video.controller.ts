import { Get, Controller, Post, UseInterceptors, UploadedFile, Res, Param, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { multerOpts } from './multer/config';
import { join } from 'path';
import { VideoService } from './video.service'

@Controller('video')
export class VideoController {
	
	constructor(
	private videoService:VideoService
	) {}
	
	
	@Post('upload')
	@UseInterceptors(
		FileInterceptor('video', {
			dest: "./upload"
		})
	)
	async uploadVideo(@UploadedFile() file) {
		const { filename } = await file;
		const url = await `https://ytback.run.goorm.io/upload/${filename}`;
		return { url };
	}


	@Post('uploadpost')
	async uploadPost(
		@Body() body
	): Promise<any> {
		const { newVideoPost, videoURL } = await this.videoService.uploadPost(body);
		console.log(newVideoPost);
		return { videoURL };
	}

	
	@Post('findVideoById')
	async findVideoById(
		@Body('videoId') videoId
	): Promise<any> {
		const VideoInfo = await this.videoService.findVideoById(videoId);
		return VideoInfo;
	}
	
}
