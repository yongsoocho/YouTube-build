import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDocument } from './schemas/video.schema'

@Injectable()
export class VideoService {
	
	constructor(
	@InjectModel('Video') private videoModel: Model<VideoDocument>
	) {}
	
	async uploadPost(body) {
		const { title, description, author, genre, hashtag, videoURL } = body;
		
		const newVideoPost = await new this.videoModel({
			title,
			description,
			author,
			genre,
			hashtag,
			videoURL
		});
		await newVideoPost.save();
		return { newVideoPost, videoURL };
	}
	
	
	async findVideoById(videoId) {
		const VideoInfo = await this.videoModel.findOne({ _id:videoId });
		return VideoInfo;
	}

}
