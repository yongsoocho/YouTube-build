<template>
<v-row>
	<v-col cols="12" md="2"></v-col>
	<v-col cols="12" md="8">
		<v-container>
			<v-stepper v-model="e1" light>
			  <v-stepper-header>
				<v-stepper-step
				  :complete="e1 > 1"
				  step="1"
				>
				  Uploads your video file
				</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step
				  :complete="e1 > 2"
				  step="2"
				>
				  Setting your video Details
				</v-stepper-step>

				<v-divider></v-divider>

				<v-stepper-step step="3">
				  Congratulation
				</v-stepper-step>
			  </v-stepper-header>

			  <v-stepper-items>
				<v-stepper-content step="1">
				  <v-container>
					<v-img src="https://t1.daumcdn.net/cfile/tistory/240814485574155029">
					</v-img>
				  </v-container>
				  <v-container>
					<v-form>
						<v-btn
							   fab
							   outlined
							   color="blue"
							   @click="onClickUploadVideo"
							   >
							<v-icon large>mdi-video-plus</v-icon>
						</v-btn>
						<v-btn
							   fab
							   outlined
							   color="red"
							   >
							<v-icon large>mdi-video-off</v-icon>
						</v-btn>
						<input ref="inputVideo" type="file" accept="video/*" @input.stop="inputVideoFile" v-show="false"/>
					</v-form>
				  </v-container>

				  <v-container>
					  <v-btn
						color="primary"
						@click="e1 = 2"
						:disabled="continueBtn"
					  >
						Continue
					  </v-btn>

					  <v-btn text>
						Cancel
					  </v-btn>
				  </v-container>
				</v-stepper-content>

				<v-stepper-content step="2">
				  <v-card
					color="white"
					height="400px"
					flat
				  >
					  <v-form>
						  <v-container>
							  <v-text-field
											counter
											v-model="title"
											label="title"
											light
											clearable
											>
							  </v-text-field>
						  </v-container>
						  <v-container>
							  <v-text-field
											counter
											v-model="description"
											label="description"
											light
											clearable
											>
							  </v-text-field>
						  </v-container>
						  <v-container>
							  <v-text-field
											counter
											v-model="genre"
											label="genre"
											light
											clearable
											>
							  </v-text-field>
						  </v-container>
						  <v-container>
							  <v-text-field
											counter
											v-model="hashtag"
											label="hashtag"
											light
											clearable
											>
							  </v-text-field>
						  </v-container>
					  </v-form>
				  </v-card>

				  <v-btn
					color="primary"
					@click="e1 = 3"
				  >
					Continue
				  </v-btn>

				  <v-btn text @click="e1 = 1">
					Cancel
				  </v-btn>
				</v-stepper-content>

				<v-stepper-content step="3">
				  <v-card
					color="white"
					height="200px"
					flat
				  ></v-card>

				  <v-btn
					color="primary"
					@click="onClickVideoDetail"
				  >
					Done
				  </v-btn>

				  <v-btn
						 text
						 @click="onClickHome"
						 >
					Home
				  </v-btn>
				</v-stepper-content>
			  </v-stepper-items>
			</v-stepper>
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
			onClickVideoDetail() {
				this.$router.push('/video/12345');
			},
			onClickHome() {
				this.$router.push('/');
			},
			inputVideoFile(event) {
				console.log(event.target.files);
				this.continueBtn = false;
			},
			onClickUploadVideo() {
				this.$refs.inputVideo.click();
				console.log(this.$refs);
			}
		}
	});
</script>

<style scoped>
	
</style>