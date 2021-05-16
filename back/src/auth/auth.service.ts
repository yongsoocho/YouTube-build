import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	
	constructor(
		private jwtService:JwtService,
	  private userService:UserService
	) {}
	
	async logIn(body): Promise<any> {
		const user = await this.userService.findUserByEmail(body.email);
		
		if(!user) { throw new UnauthorizedException('Not Found') };
		
		const result = await bcrypt.compare(body.password, user.password);
		
		if(!result) { return new UnauthorizedException('Check your password') };
		
		const { _doc: {_id, password, ...member } } = user; 
		
		const jwt = await this.jwtService.sign(member);
		
		return { jwt, member };
	}
	
}
