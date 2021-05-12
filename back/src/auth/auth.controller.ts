import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
// @UseGuards(AuthGuard())
export class AuthController {
	
	constructor(private authServie:AuthService) {}
	
	@Post('/login')
	async logIn(@Body() body): Promise<any> {
		return this.authServie.logIn(body);
	}
	
	@Post('/test')
	@UseGuards(AuthGuard())
	async test(@Req() req) {
		console.log(req.user);
	}


}
