export const state = () => ({
	
	user: null
	
})

export const mutations = {
	
	LOGIN(state, payload) {
		const { member } = payload;
		state.user = member;
	},
	
	LOGOUT(state) {
		state.user = null;
	},
	
	EDITNAME(state, payload) {
		const { newName } = payload;
		state.user.name = newName;
	}
	
}

export const actions = {
	
	async postLogin({ commit }, payload) {
		await this.$axios.post('/user/login', payload)
		.then((res) => {
			// const Token = res.data.jwt;
			// localStorage.setItem('Authorization', jwtToken);
			commit('LOGIN', { member: res.data.member });
		})
		.catch((err) => {
			console.log(`postLogin Error: ${err}`);
		})
	},
	
	async getLogout({ commit }) {
		await this.$axios.get('/user/logout')
		.then(() => {
			// localStorage.removeItem('Authorization');
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
		}, { credentials:true })
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
	
	async editName({ commit }, payload) {
		const { newName, email } = payload;
		
		await this.$axios.patch('/user/editname', {
			newName,
			email
		}, { credentials:true })
		.then(() => {
			commit('EDITNAME', {
				newName
			})
		})
		.catch((err) => {
			console.log(`editName Error: ${err}`)
		});
	},
	
	
}