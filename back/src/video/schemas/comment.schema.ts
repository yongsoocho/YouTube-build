import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
	
	content: {
		type: String,
		required: true
	},
	
	author: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	
	video: {
		type: mongoose.Types.ObjectId,
		required: true,
		ref: 'Video'
	},
	
	replies: [{
		content: {
			type: String,
			required: true
		},
		
		author: {
			_id: {
				type: mongoose.Types.ObjectId,
				required: true,
				ref: 'User'
			},
			
			name: {
				type: String,
				required: true
			}
		},
		
		createdAt: {
			type: Date, 
			default: Date.now
		}
	}]
	
}, { timestamps:true });


export interface IComment {
	content:string;
	author:string;
	video:string;
	replies:[{ content:string; author:{ _id:string; name:string; }; createdAt:string;}];
	createdAt:string;
};


export type CommentDocument = mongoose.Document & IComment;