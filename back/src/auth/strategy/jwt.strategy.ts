import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	
	constructor(
		private userService:UserService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'test2',
		});
	}
	
	
	async validate(payload) {
		const { email } = payload;
		
		const user = await this.userService.findUserByEmail(email);
		
		if(!user) { throw new UnauthorizedException('Not Found User'); }
		
		return user;
	}
	
}