export const state = () => ({
	
	VideoInfo: {
		title: null,
		description: 'None',
		author: null,
		hashtag: null,
		likeUsers: null,
		dislikeUsers: null,
		_id: null,
		comments: null,
		createdAt: null,
		updatedAt: null,
		genre: null,
		views: 0
	}
	
})

export const mutations = {
	
	LOADING(state , payload) {
		state.loading = true
	},
	
	VIDEOINFO(state, payload) {
		const { VideoInfo } = payload;
		state.VideoInfo.title = VideoInfo.title;
		state.VideoInfo.description = VideoInfo.description;
		state.VideoInfo.author = VideoInfo.author;
		state.VideoInfo.hashtag = VideoInfo.hashtag;
		state.VideoInfo.likeUsers = VideoInfo.likeUsers;
		state.VideoInfo.dislikeUsers = VideoInfo.dislikeUsers;
		state.VideoInfo._id = VideoInfo._id;
		state.VideoInfo.comments = VideoInfo.comments;
		state.VideoInfo.createdAt = VideoInfo.createdAt;
		state.VideoInfo.updatedAt = VideoInfo.updatedAt;
		state.VideoInfo.genre = VideoInfo.genre;
		state.VideoInfo.views = VideoInfo.views;
	}
	
}

export const actions = {

	// async uploadVideo({ commit }, payload) {
	// 	this.$axios.post('/video/upload', payload, { withCredentials:true })
	// 	.then((res) => {
	// 		const url = res.data.url;
	// 		return url;
	// 	})
	// 	.catch((err) => {
	// 		console.log(`upload video.js Error: ${err}`)
	// 	})
	// }
	
	async findVideoById({ commit }, payload) {
		const { videoId } = payload;
		
		this.$axios.post('/video/findVideoById', { videoId }, { withCredentials:true })
		.then((res) => {
			const VideoInfo = res.data;
			commit("VIDEOINFO", { VideoInfo });
		})
		.catch((err) => {
			console.log(`findVideoById Error: ${err}`)
		})
	}
	
}