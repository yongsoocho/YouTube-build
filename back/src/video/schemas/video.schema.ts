import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: true
	},
	
	description: {
		type: String,
		required: true
	},
	
	author: UserSchema,
	
	myVideo: [VideoSchema],
	
	favoriteVideo: [VideoSchema]
	
}, { timestamps:true });


export interface IVideo = {
	name:string;
	email:string;
	hash:string;
	myVideo:IVideo[];
	favoriteVideo:Array<IVideo>;
};


export type VideoDocument = mongoose.Document & IVideo; 