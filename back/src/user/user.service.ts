import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IUser, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

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
			if(exUser) { throw new HttpException("Already existing user", 400) };
			const hash = await bcrypt.hash(password, 12);
			const newUser = new this.userModel({
				email,
				name,
				password: hash
			});
			await newUser.save();
			return newUser;
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async logIn(body): Promise<any> {
		try{
			const { email, password } = body;
			const user = await this.userModel.findOne({ email: email });
			if(!user) { throw new Error('email') };
			const result = await bcrypt.compare(password, user.password);
			if(!result) { throw new Error('pw') };
			return console.log('login!');
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
