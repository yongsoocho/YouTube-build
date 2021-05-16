export const state = () => ({
	
})

export const mutations = {
	
	LOADING(state , payload) {
		state.loading = true
	},
	
}

export const actions = {

	uploadVideo({ commit }, payload) {
		this.$axios.post('/video/upload', payload, { withCredentials:true })
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(`upload video.js Error: ${err}`)
		})
	}
	
}