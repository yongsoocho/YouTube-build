<template>
<v-row>
	<v-col cols="12" md="2"></v-col>
	
	<v-col cols="12" md="8">
		
		<v-container>
			<video v-if="videoURL" class="video" controls preload="auto" type="video/mp4">
				<source :src="videoURL" type="video/mp4">
			</video>
			
			<v-form>
					<v-card flat color="white" width="600">
						<v-container>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Title"
														v-model="title"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Description"
														v-model="description"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Hashtag"
														v-model="hashtag"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Genre"
														v-model="genre"
														></v-text-field>
						</v-container>
					</v-card>
				
					<v-card flat color="white" width="600" :style="{ marginTop:'15px' }">
						<v-container>
							<input type="file" @input.prevent="inputVideoFile" v-show="false" ref="AddVideo" />
							
							<v-btn text tile color="blue" large @click="onClickUploadVideo">upload video</v-btn>
							
							<v-btn 
										 outlined 
										 tile 
										 color="blue" 
										 large 
										 :style="{ marginLeft:'30px' }" 
										 @click="onClickUploadPost" 
										 :disabled="!videoURL">
								done
							</v-btn>
						</v-container>
					</v-card>
			</v-form>
		</v-container>

	</v-col>
	
	<v-col cols="12" md="2"></v-col>
</v-row>
</template>

<script lang="ts">
	import Vue from 'vue';
	
	export default Vue.extend({
		data () {
    		return {
					title:'',
					description:'',
					genre:'',
					hashtag:'',
					videoURL:'',
    		}
  		},
		
		methods: {
			
			inputVideoFile(e) {
				const file = e.target.files[0]
				
				const videoFormData = new FormData();
				
				videoFormData.append('video', file);
				
				this.$axios.post('/video/upload', videoFormData, { withCredentials:true })
				.then((res) => {
					const url = res.data.url;
					this.videoURL = url
				})
				.catch((err) => {
					console.log(`video upload Error: ${err}`);
				})
			},
			
			onClickUploadVideo() {
				this.$refs.AddVideo.click();
			},
			
			
			onClickUploadPost() {
				const genre = this.genre.split(' ');
				
				const hashtag = this.hashtag
				.split('#')
				.splice(0, 1);
				
				for(let i in hashtag) {
					hashtag[i] = '#' + hashtag[i];
				}
				
				this.$axios.post('/video/uploadpost', {
					title: this.title,
					description: this.description,
					author: this.user._id,
					genre: genre,
					hashtag: hashtag,
					videoURL: this.videoURL
				}, { withCredentials:true })
				.then((res) => {
					const { redirectURL } = res.data;
					this.$router.push({
						path: redirectURL
					})
				})
				.catch((err) => {
					console.log(`post upload Error: ${err}`);
				})
			}
			
		},
		
		asyncData({ store }) {
      store.dispatch('user/jwtLogIn')
			// .then(() => {
			// 	return;
			// })
			// .catch((err) => {
			// 	console.log(`asyncData Error: ${err}`)
			// })
    },
		
		computed: {
			user() {
				return this.$store.state.user.user;
			}
		}
		
	});
</script>

<style scoped>
	.video {
		width: 100%;
  	height: auto;
	}
</style>