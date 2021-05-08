import * as mongoose from 'mongoose';
import { IVideo, VideoSchema } from '../../video/schemas/video.schema';

export const UserSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: true
	},
	
	email: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	
	password: {
		type: String,
		required: true
	},
	
	myVideo: [VideoSchema],
	
	favoriteVideo: [VideoSchema],
	
	mySubscription: [{
		_id: {
			type: mongoose.Types.ObjectId,
			ref:'User'
		}
	}]
	
}, { timestamps:true });


export interface IUser {
	name:string;
	email:string;
	password:string;
	myVideo:IVideo[];
	favoriteVideo:Array<IVideo>;
};


export type UserDocument = mongoose.Document & IUser; 