import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './schemas/user.schema';

@Controller('user')
export class UserController {
	
	constructor(private userService: UserService) {}


	@Post('/sub/:id')
	async subUser(
		@Body() body,
		@Param() params
	): Promise<any> {
		return this.userService.subUser(body, params);
	}


	@Post('/dissub/:id')
	async disSubUser(
		@Body() body,
		@Param() params
	): Promise<any> {
		return this.userService.disSubUser(body, params);
	}


	@Post('/signup')
	async signUp(
		@Body() body
	): Promise<any> {
		return this.userService.signUp(body);
	}


	@Post('/login')
	async logIn(
		@Body() body
	): Promise<any> {
		return this.userService.logIn(body);
	}


	@Get('/logout')
	async logOut(): Promise<any> {
		return this.userService.logOut();
	}


	@Get('/:id')
	async findUser(
		@Param() params
	): Promise<any> {
		return this.userService.findUser(params);
	};


	@Delete('/:id')
	async deleteUser(
		@Param() params
	): Promise<any> {
		return this.userService.deleteUser(params);
	}


}
