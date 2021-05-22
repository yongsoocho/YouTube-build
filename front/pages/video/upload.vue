<template>
<v-row>
	<v-col cols="12" md="2"></v-col>
	
	<v-col cols="12" md="8">
		
		<v-container>
			<iframe
							width="1280"
							height="720"
							src="https://www.youtube.com/embed/ioNng23DkIM"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							>
			</iframe>
			
			<v-form>
					<v-card flat color="white" width="600">
						<v-container>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Title"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Description"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Hashtag"
														></v-text-field>
							<v-text-field 
														light
														clearable
														color="blue"
														placeholder="Genre"
														></v-text-field>
						</v-container>
					</v-card>
				
					<v-card flat color="white" width="600" :style="{ marginTop:'15px' }">
						<v-container>
							<input type="file" @input.prevent="inputVideoFile" v-show="false" ref="AddVideo" />
							
							<v-btn text tile color="blue" large @click="onClickUploadVideo">upload video</v-btn>
							
							<v-btn outlined tile color="blue" large :style="{ marginLeft:'30px' }">done</v-btn>
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
      		e1: 1,
					title:'',
					description:'',
					genre:'',
					hashtag:'',
					continueBtn:true
    		}
  		},
		
		methods: {
			
			inputVideoFile(e) {
				const file = e.target.files[0]
				const videoFormData = new FormData();
				videoFormData.append('video', file);
				this.$store.dispatch('video/uploadVideo', videoFormData)
				.then(() => {
					console.log('!!');
				})
				.catch((err) => {
					console.log(`video upload Error: ${err}`);
				})
			},
			
			onClickUploadVideo() {
				this.$refs.AddVideo.click();
			}
			
		}
		
	});
</script>

<style scoped>
	
</style>