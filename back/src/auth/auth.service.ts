import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
	
	constructor(
		private jwtService:JwtService,
	  private userService:UserService
	) {}
	
	async logIn(body) {
		const user = await this.userService.findUserByEmail(body.email);
		
		if(!user) { throw new UnauthorizedException('Not Found') };
		
		const payload = { email:user.email , name:user.name };
		
		const accessToken = await this.jwtService.sign(payload);
		
		return { accessToken };
	}
	
}
