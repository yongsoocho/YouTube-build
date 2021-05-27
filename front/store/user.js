import Cookie from 'js-cookie';

export const state = () => ({
	
	user: null
	
})

export const mutations = {
	
	LOGIN(state, payload) {
		const { jwt } = payload;
		state.user = jwt;
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
		await this.$axios.post('/auth/login', payload, { withCredentials: true })
		.then((res) => {
			console.log('postLogin::::')
			const jwt = res.data.jwt;
			localStorage.setItem('jwt', jwt);
			Cookie.set('jwt', jwt);
			commit('LOGIN', { jwt });
		})
		.catch((err) => {
			console.log(`postLogin Error: ${err}`);
		})
	},
	
	async reLogIn(vueCtx, req) {
		if(req) {
			if(!req.headers.cookie) { return; }
			const jwtCookie = req.headers.cookie
																		.split(';')
																		.find(c => c.trim().startsWith('jwt='));
			
			console.log('jwtCookie ::', jwtCookie)
			if(!jwtCookie) { return; }
			const jwt = jwtCookie.split('=')[1];
			vueCtx.commit("LOGIN", { jwt });
		} else {
			const jwt = localStorage.getItem('jwt');

			if(!jwt) { return; }
			console.log('NON req::::');
			vueCtx.commit("LOGIN", { jwt });
		}
	},
	
	async getLogout({ commit }) {
		// await this.$axios.get('/auth/logout', { withCredentials: true })
		// .then(() => {
		// 	commit('LOGOUT');
		// })
		// .catch((err) => {
		// 	console.log(`getLogout Error: ${err}`)
		// });
		localStorage.removeItem('jwt');
		Cookie.remove('jwt');
		commit('LOGOUT');
	},
	
	async postSignUp({ commit, dispatch }, payload) {
		const { email, password, name } = payload;
		await this.$axios.post('/user/signup', {
			email,
			password,
			name
		}, { withCredentials:true })
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
		}, { withCredentials:true })
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