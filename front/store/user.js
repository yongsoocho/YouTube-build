export const state = () => ({
	user: null
})

export const mutations = {
	GETUSER(state , payload) {
		const { info } = payload;
		state.user = info;
	},
	REMOVEUSER(state ) {
		state.user = null;
	}
}

export const actions = {
	getUser({ commit }, payload) {
		commit('GETUSER', payload);
	},
	removeUser({ commit }) {
		commit('REMOVEUSER');
	}
}