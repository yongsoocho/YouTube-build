import { Get, Controller, Post, UseInterceptors, UploadedFile, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import { multerOpts } from './multer/config';
import { join } from 'path';

@Controller('video')
export class VideoController {
	
	@Post('upload')
	@UseInterceptors(
		FileInterceptor('video', {
			dest: "./upload"
		})
	)
	async uploadVideo(@UploadedFile() file) {
		const { originalname, filename, path } = await file; 
		return console.log(file)
	}

	@Get('upload/:videoUrl')
	findAndSend(
		@Res({ passthrough: true }) res: Response,
		@Param('videoUrl') url
	) {
		return res.sendFile(join(process.cwd(), 'upload/', url));
	}

}
