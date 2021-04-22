<template>
<v-app-bar
			   app
			   clipped-left
			   dark
			   color="white"
			   >
			<v-app-bar-nav-icon 
								class="hidden-sm-and-down"
								@click.stop="onClickDrawerToggle"
								color="grey">
			</v-app-bar-nav-icon>
			<v-app-bar-title>
				<NuxtLink 
						  id="link" 
						  to="/" 
						  :style="{ display:'flex', alignItems:'center' }">
					<v-icon
							color="red"
							large 
							:style="{ margin:'0px 5px' }"
							>mdi-youtube
					</v-icon>
					<span class="black--text">YouTube</span>
				</NuxtLink>
			</v-app-bar-title>
			
			<v-spacer class="hidden-sm-and-down"></v-spacer>
			
			<v-text-field
						  single-line
						  color="blue"
						  hide-details
						  dense
						  light
						  outlined
						  label="search"
						  v-model="searchText"
						  >
			</v-text-field>
			<v-btn
				   icon
				   :color="searchBtn"
				   :style="{ marginLeft:'3px' }"
				   @click="onClickSearch"
				   >
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			
			<v-spacer></v-spacer>
			
			<v-btn
				   class="hidden-sm-and-down"
				   text
				   icon
				   color="grey"
				   >
				<v-icon>mdi-apps</v-icon>
			</v-btn>
			<v-btn
				   class="hidden-sm-and-down"
				   text
				   icon
				   color="grey"
				   :style="{ margin:'0px 5px' }"
				   >
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
			<v-btn
				   large
				   tile
				   outlined
				   color="blue"

				   to="signIn"
				   >
				<v-avatar
						  color="blue"
						  size="30"
						  :style="{ marginRight:'3px' }"
						  >
					<v-icon color="white">
						mdi-account
					</v-icon>
				</v-avatar>
				<span>Log In</span>
			</v-btn>
	</v-app-bar>
</template>

<script lang="ts">
	import Vue from "vue";
	import { EventBus } from "../bus/bus.js";
	
	export default Vue.extend({
		data() {
			return {
				searchText: ''
			}
		},
		
		methods: {
			onClickSearch() {	// change axios
				this.$router.push({
					path:`/search`
				});
			},
			onClickDrawerToggle() {
				EventBus.$emit('drawerToggle');
			}
		},
		
		computed: {
			searchBtn() {
				if(this.searchText) {
					return 'blue'
				} else {
					return 'grey'
				}
			}
		},
	});
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
</style>