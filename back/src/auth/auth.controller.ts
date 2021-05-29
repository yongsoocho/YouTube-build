import { Controller, Get, Post, Body, UseGuards, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../user.decorator';
import { Request, Response } from 'express';

@Controller('auth')
// @UseGuards(AuthGuard())
export class AuthController {
	
	constructor(private authService:AuthService) {}
	
	@Post('/login')
	async logIn(
		@Body() body,
		@Res({ passthrough: true }) res:Response
	): Promise<any> {
		
		const { jwt, member } = await this.authService.logIn(body);

		if(!jwt || !member) { throw new UnauthorizedException('Login Error') }

		// res.cookie('jwt', jwt, { httpOnly: true });
		
		return { jwt, member };
	}

	// @Get('/logout')
	// async logOut(@Res({ passthrough: true }) res:Response): Promise<any> {
	// 	return res.clearCookie('jwt');
	// }

	@Post('/relogin')
	async reLogIn(
		@Body('jwt') jwt
	): Promise<any> {
		if(!jwt) { return; }
		const member = await this.authService.reLogIn(jwt);
		return { member };
	}


}
