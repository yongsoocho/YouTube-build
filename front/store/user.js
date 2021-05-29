import Cookie from 'js-cookie';

export const state = () => ({
	
	user: null
	
})

export const mutations = {
	
	LOGIN(state, payload) {
		const { member, jwt } = payload;
		if(member) {
			state.user = member;
		}
		if(jwt) {
			state.user = jwt;
		}
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
	
	async jwtLogIn({ commit, state }) {
		if(state.user) {
			const jwt = state.user;
			
			await this.$axios.post('/auth/relogin', { jwt }, { withCredentials:true })
			.then((res) => {
				const { member } = res.data;
				commit("LOGIN", { member });
			})
			.catch((err) => {
				console.log(`jwtLogIn Error in Action: ${err}`);
			})
		}
	},
	
	
	async postLogin({ commit }, payload) {
		await this.$axios.post('/auth/login', payload, { withCredentials: true })
		.then((res) => {
			const { jwt, member } = res.data;
			
			localStorage.setItem('jwt', jwt);
			
			Cookie.set('jwt', jwt);
			
			commit('LOGIN', { member });
		})
		.catch((err) => {
			console.log(`postLogin Error: ${err}`);
		})
	},
	
	async reLogIn(vueCtx, req) {
		const user = vueCtx.state.user;
		
		if(user) { return; }
			 
		if(req) {
			if(!req.headers.cookie) { return; }
			
			const jwtCookie = req.headers.cookie
																		.split(';')
																		.find(c => c.trim().startsWith('jwt='));
			
			if(!jwtCookie) { return; }
			
			const jwt = jwtCookie.split('=')[1];
			
			vueCtx.commit("LOGIN", { jwt });
			// await this.$axios.post('/auth/relogin', { jwt }, { withCredentials: true })
			// .then((res) => {
			// 	const member = res.data.member;
			// 	vueCtx.commit("LOGIN", { member });
			// 	if(!member) {
			// 		return console.log('NOT FOUND USER ON REQ');
			// 	}
			// })
			// .catch((err) => {
			// 	console.log(`reLogIn request Error: ${err}`);
			// })
		} else {
			const jwt = localStorage.getItem('jwt');

			if(!jwt) { return; }
			
			vueCtx.commit("LOGIN", { jwt });
			// await this.$axios.post('/auth/relogin', { jwt }, { withCredentials: true })
			// .then((res) => {
			// 	const { member } = res.data.member;
			// 	console.log('relogin success on localStorage');
			// 	vueCtx.commit("LOGIN", { member });	
			// 	if(!member) {
			// 		return console.log('NOT FOUND USER ON LOCALSTORAGE');
			// 	}
			// })
			// .catch((err) => {
			// 	console.log(`reLogIn localStorage Error: ${err}`);
			// })
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