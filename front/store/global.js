export const state = () => ({
	loading: null
})

export const mutations = {
	LOADING(state , payload) {
		state.loading = true
	},
	
	LOADINGEND(state , payload) {
		state.loading = false
	}
}

export const actions = {

}