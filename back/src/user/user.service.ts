import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IUser, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
	
	constructor(
		@InjectModel('User') private readonly userModel:Model<UserDocument>,
	){}
	

	async findUser(params): Promise<IUser> {
		try {
			const { id } = params;
			const user = await this.userModel.findOne({ _id: id });
			return user;
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async subUser(body, params): Promise<any> {
		try {
			return console.log('subUser');
		}catch(err) {
			console.log(err);
		}
	}


	async disSubUser(body, params): Promise<any> {
		try {
			return console.log('disSubUser');
		}catch(err) {
			console.log(err);
		}
	}


	async deleteUser(params): Promise<any> {
		try {
			const { id } = params;
			const user = await this.userModel.findOneAndDelete({ _id: id });
			return user;
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async signUp(body): Promise<any> {
		try {
			const { email, name, password } = body;
			const exUser = await this.userModel.findOne({ email: email }, { email: 1 });
			if(exUser) { return console.log('existing user') };
			const newUser = new this.userModel({
				email,
				name,
				password
			});
			await newUser.save();
			return newUser;
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async logIn(body): Promise<any> {
		try{
			console.log('login');
		}catch(err) {
			console.log(err);
		}
	}
	

	async logOut(): Promise<any> {
		try{
			console.log('logOut');
		}catch(err) {
			console.log(err);
		}
	}
}
