export const state = () => ({
	
	user: null
	
})

export const mutations = {
	
	LOGIN(state , payload) {
		state.user = payload;
	},
	
	LOGOUT(state) {
		state.user = null;
	},
}

export const actions = {
	
	async postLogin({ commit }, payload) {
		await this.$axios.post('/user/login', payload)
		.then((res) => {
			const jwtToken = res.data.jwt;
			localStorage.setItem('Authorization', jwtToken);
			commit('LOGIN', res.data);
		})
		.catch((err) => {
			console.log(`postLogin Error: ${err}`);
		})
	},
	
	async getLogout({ commit }) {
		await this.$axios.get('/user/logout')
		.then(() => {
			localStorage.removeItem('Authorization');
			commit('LOGOUT');
		})
		.catch((err) => {
			console.log(`getLogout Error: ${err}`)
		});
	},
	
	async postSignUp({ commit, dispatch }, payload) {
		const { email, password, name } = payload;
		await this.$axios.post('/user/signup', {
			email,
			password,
			name
		})
		.then(() => {
			dispatch('postLogin', {
				email,
				password
			})
		})
		.catch((err) => {
			console.log(`postSignUp Error: ${err}`)
		});
	},
}