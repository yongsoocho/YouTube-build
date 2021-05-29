import * as mongoose from 'mongoose';
import { CommentSchema } from './comment.schema';

export const VideoSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: true
	},
	
	description: {
		type: String,
		required: true
	},
	
	author: {
		type: mongoose.Types.ObjectId, 
		required:true, 
		ref:'User'
	},
	
	views: {
		type: Number,
		required: true,
		default: 1
	},
	
	comments: [CommentSchema],
	
	genre: [{
		type: String
	}],
	
	hashtag: [String],
	
	likeUsers: [{
		type: mongoose.Types.ObjectId,
		ref: 'User'
	}],
	
	dislikeUsers: [{
		type: mongoose.Types.ObjectId,
		ref: 'User'
	}]
	
}, { timestamps:true });


export interface IVideo {
	title:string;
	description:string;
	author: string ;
	views: number;
	comments: any;
	likeUsers: Array<string>;
	dislikeUsers: Array<string>;
};


export type VideoDocument = mongoose.Document & IVideo; 