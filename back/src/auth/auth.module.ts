import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
	imports: [
		UserModule,
		PassportModule.register({
			defaultStrategy:'jwt'
		}),
		JwtModule.register({
			secret:'test2',
			signOptions: { expiresIn: '300s' }
		})
	],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
	exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
