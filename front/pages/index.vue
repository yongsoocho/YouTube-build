<template>
	<v-container>
		<v-row>
			<v-container>
				<v-col cols="12">
					<v-title 
							 :style="{ fontSize:'24px' }"
							 class="black--text"
							 >
						Trending
					</v-title>
					<v-divider color="grey"></v-divider>
				</v-col>
			</v-container>
		</v-row>
		<v-row>
			<v-col cols="12" md="3" v-for="i in text1" :key="i">
				<VideoCard></VideoCard>
			</v-col>
		</v-row>

		<v-row>
			<v-container>
				<v-col cols="12">
					<v-title 
							 :style="{ fontSize:'24px' }"
							 class="black--text"
							 >
						Daily
					</v-title>
					<v-divider color="grey"></v-divider>
				</v-col>
			</v-container>
		</v-row>
		<v-row>
			<v-col cols="12" md="3" v-for="i in text2" :key="i">
				<VideoCard></VideoCard>
			</v-col>
		</v-row>
	</v-container>
</template>
 
<script lang="ts">
	import Vue from "vue";
	import VideoCard from "~/components/videoCard.vue"

	const text2 = new Array(16).fill(0);
	
	export default Vue.extend({
		data() {
			return {
				text1:[1, 2, 3, 4, 5, 6, 7, 8],
				text2: text2
			}
		},
		components: {
			VideoCard
		}
	});
</script>

<style scoped>
</style>