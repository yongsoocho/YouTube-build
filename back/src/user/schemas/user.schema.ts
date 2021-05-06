import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
	
	name: {
		type: String,
		required: true
	},
	
	email: {
		type: String,
		required: true
	},
	
	hash: {
		type: String,
		required: true
	},
	
	myVideo: [VideoSchema],
	
	favoriteVideo: [VideoSchema]
	
}, { timestamps:true });


export interface IUser = {
	name:string;
	email:string;
	hash:string;
	myVideo:IVideo[];
	favoriteVideo:Array<IVideo>;
};


export type UserDocument = mongoose.Document & IUser; 