import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { IUser, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
	
	constructor(
		@InjectModel('User') private readonly userModel:Model<UserDocument>,
	){}
	
	async findUserByEmail(email): Promise<any> {
		const user = await this.userModel.findOne({ email: email });
		return user;
	}

	async findUser(params): Promise<any> {
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
			const { email, password, name } = body;
			const exUser = await this.userModel.findOne({ email: email }, { email: 1 });
			if(exUser) { throw new UnauthorizedException('Try another email') };
			const hash = await bcrypt.hash(password, 12);
			const newUser = new this.userModel({
				email,
				password: hash,
				name
			});
			await newUser.save();
			return newUser;
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async logIn(body): Promise<any> {
		// try{
		// 	const { email, password } = body;
		// 	const user = await this.userModel.findOne({ email: email });

		// 	if(!user) { return new UnauthorizedException('Check your email') };

		// 	const result = await bcrypt.compare(password, user.password);
		// 	if(!result) { return new UnauthorizedException('Check your password') };

		// 	const authJwtToken = jwt.sign({ email:user.email, name:user.name }, 'SecretKey');
		// 	let data = { jwt:null };
		// 	data.jwt = authJwtToken;
		// 	return data;
		// }catch(err) {
		// 	console.log(err);
		// }
	}
	

	async logOut(): Promise<any> {
		try{
			console.log('logOut');
		}catch(err) {
			console.log(err);
		}
	}
	
	
	async editName({ newName, email }): Promise<any> {
		await this.userModel.updateOne({ email:email }, { $set: { name: newName } });
		return;
	}
}
