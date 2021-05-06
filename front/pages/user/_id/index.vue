<template>
<v-row>
	<v-col cols="12" md="2"></v-col>
	
	<v-col cols="12" md="8">
		<v-container>
			<v-card light>
				<v-card-title>
					<v-avatar 
								   size="64"
								   color="blue"
								   >
					</v-avatar>
					<v-card-title>
						Name
					</v-card-title>
					<v-btn fab text color="grey">
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-spacer></v-spacer>
					<v-card-subtitle>
						email
					</v-card-subtitle>
				</v-card-title>
				
				<v-container>
					<v-divider color="grey"></v-divider>
				</v-container>
				
				<v-container>
					<v-tabs v-model="tab">
						<v-tab>My Video</v-tab>
						<v-tab>Favorite Video</v-tab>
					</v-tabs>
					
					<v-tabs-items v-model="tab">
						<v-tab-item>
							<MyVideo/>
						</v-tab-item>
						<v-tab-item>
							<FavoriteVideo/>
						</v-tab-item>
					</v-tabs-items>
				</v-container>
			</v-card>
		</v-container>
	</v-col>
	
	<v-col cols="12" md="2"></v-col>
</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import MyVideo from "~/components/myVideo.vue"
	import FavoriteVideo from "~/components/favoriteVideo.vue"
	
	export default Vue.extend({
		data() {
			return {
				tab:null
			}
		},
		
		components: {
			MyVideo,
			FavoriteVideo
		}
	});
</script>

<style scoped>
</style>