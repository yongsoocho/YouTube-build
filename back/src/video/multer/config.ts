import { diskStorage } from 'multer';

export const multerOpts = {
	
	fileFilter:(req: any, file: any, cb: any) => {
		if(file.mimetype) { console.log(file.mimetype); }
		
		cb(null, true)	
	},
	
	storage:diskStorage({
		destination:(req: any, file: any, cb: any) => {
			cb(null, '../../videocloud')
		},
		
		filename:(req: any, file: any, cb: any) => {
			cb(null, file)
		}
	})
	
}