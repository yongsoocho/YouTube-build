import { Controller, Get, Post, Delete, Patch, Body, Param, Res, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './schemas/user.schema';
import { Response, Request } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
	
	constructor(
	private userService: UserService,
	private jwtService: JwtService
	) {}
	
	@Patch('/editname')
	async editName(@Body() body): Promise<any> {
		await this.userService.editName(body);
		return { msg:'patch success' };
	}

	@Get('/')
	async user(@Req() req: Request): Promise<any> {

		const cookie = req.cookies['jwt'];
		
		const data = await this.jwtService.verifyAsync(cookie);
		
		if(!data) { throw new UnauthorizedException('Re Login is required') };
		
		const user = await this.userService.findUserByEmail(data.email);

		const { _doc: {_id, password, __v, ...member } } = user;

		return { member };
	}

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
		@Body() body,
		@Res({ passthrough: true }) res: Response
	): Promise<any> {
		const user = await this.userService.findUserByEmail(body.email);
		
		if(!user) { throw new UnauthorizedException('User Not Found') };

		const result = await bcrypt.compare(body.password, user.password);
		
		if(!result) { return new UnauthorizedException('Check your password') };
		
		const { _doc: {_id, password, __v, ...member } } = user;
		
		const jwt = await this.jwtService.signAsync({ email: member.email });

		res.cookie('jwt', jwt, { httpOnly: true });

		return { member };
	}


	@Get('/logout')
	async logOut(@Res({ passthrough:true }) res:Response): Promise<any> {
		res.clearCookie('jwt');
		return { msg: 'Log Out Success' }
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
