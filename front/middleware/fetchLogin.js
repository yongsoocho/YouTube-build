export default function (ctx) {
	
	if(process.client) {
		console.log('process.client');
		ctx.store.dispatch('user/reLogIn');
	}
	
	if(process.server) {
		console.log('process.server');
		ctx.store.dispatch('user/reLogIn', ctx.req);
	}
	
}