import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	
  use(req: Request, res: Response, next: NextFunction) {
		if(req.cookies.jwt) {
			const { jwt } = req.cookies;
			
			console.log(jwt);
		}
		if(req.user) {
			
			console.log(req.user);
		}
		next();
  }
	
}
