export default function (ctx) {
	
	if(process.client) {
		ctx.store.dispatch('user/reLogIn');
	}
	
	if(process.server) {
		ctx.store.dispatch('user/reLogIn', ctx.req);
	}
	
}