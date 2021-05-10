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
						{{user.name}}
					</v-card-title>
					<div :style="{ width:'200px' }">
						<v-text-field clearable v-model="newName"></v-text-field>
					</div>
					<v-btn fab text color="blue" @click="onClickEditName">
						<v-icon>mdi-pencil</v-icon>
					</v-btn>
					<v-card-subtitle>
						{{user.email}}
					</v-card-subtitle>
					<v-spacer></v-spacer>
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
				tab:null,
				newName:''
			}
		},
		
		components: {
			MyVideo,
			FavoriteVideo
		},
		
		computed: {
			user() {
				return this.$store.state.user.user;
			}
		},
		
		methods:{
			onClickEditName() {
				return this.$store.dispatch('user/editName', {
					newName: this.newName,
					email: this.user.email
				})
			}
		},
		
		middleware: ['onlyMember']
		
	});
</script>

<style scoped>
</style>