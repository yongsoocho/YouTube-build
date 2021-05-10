// export default async function ({ $axios, store }) {
// 	const member = await $axios.$get('/user')
// 	.then(() => {
// 		console.log(member);
// 		store.state.user.user = member;
// 	})
// 	.catch((err) => {
// 		console.log(`fetchLogin Error: ${err}`)
// 	})
// }