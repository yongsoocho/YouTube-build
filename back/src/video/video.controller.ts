import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'

@Controller('video')
export class VideoController {
	
	@Post('upload')
	@UseInterceptors(FileInterceptor('file'))
	uploadVideo(@UploadedFile() file: Express.Multer.File) {
		console.log(file)
	}

}
