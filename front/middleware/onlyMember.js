export default function ({ store:{ state }, redirect }) {
	if(!state.user.user) {
		redirect('/');
	}
}