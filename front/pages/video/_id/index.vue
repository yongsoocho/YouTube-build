<template>
<v-row>
	<v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>
	
	<v-col cols="12" md="8">
		<v-container>
			<v-img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></v-img>
			<!-- -->
			<div>
				<span class="black--text">Hash Tags</span>
				<span class="black--text">Video Title</span>
			</div>
			<!-- -->
			<div :style="{ display:'flex' }">
				<div>
					<span class="black--text">view & day ago</span>
				</div>
				
				<v-spacer></v-spacer>
				
				<div>
					<v-btn-toggle>
						<v-btn>Like 13K</v-btn>
						<v-btn>Dislike 1K</v-btn>
						<v-btn>Share</v-btn>
						<v-btn>more</v-btn>
					</v-btn-toggle>
				</div>
			</div>
			<!-- -->
			<v-divider color="grey"></v-divider>
			<!-- -->
			<div :style="{ display:'flex' }">
				<v-avatar
						  color="red"
						  size="49"
						  >
				</v-avatar>
				<div>
					<span class="black--text">Creator</span>
					<span class="grey--text">Subscription</span>
				</div>
				
				<v-spacer></v-spacer>
				
				<v-btn
					   tile
					   color="red"
					   dark
					   >
					SUBSCRIBE
				</v-btn>
			</div>
			<!-- -->
			<v-divider color="grey"></v-divider>
			<!-- -->
			<CommentPost :style="{ marginBottom:'10px' }"></CommentPost>
			<!-- -->
			<CommentCard v-for="i of test" :key="i.id" :Comments="i"></CommentCard>
		</v-container>
	</v-col>
	
	<v-col cols="12" md="3" class="hidden-sm-and-down"></v-col>
</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import CommentPost from "@/components/commentPost.vue";
	import CommentCard from "@/components/commentCard.vue";
	
	export default Vue.extend({
		components: {
			CommentPost,
			CommentCard
		},
		
		data() {
			return {
				test: [
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					}
				]
			}
		}
	});
</script>

<style scoped>
</style>