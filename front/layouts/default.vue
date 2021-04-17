<template>
<v-app>
	<v-app-bar
			   app
			   clipped-left
			   dark
			   color="white"
			   >
			<v-app-bar-nav-icon 
								@click.stop="drawer = !drawer"
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
			
			<v-spacer></v-spacer>
			
			<v-text-field
						  single-line
						  color="blue"
						  hide-details
						  dense
						  light
						  outlined
						  label="search"
						  v-model="searchOn"
						  >
			</v-text-field>
			<v-btn
				   icon
				   :color="searchBtn"
				   :style="{ marginLeft:'3px' }"
				   >
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			
			<v-spacer></v-spacer>
			
			<v-btn
				   text
				   icon
				   color="grey"
				   >
				<v-icon>mdi-apps</v-icon>
			</v-btn>
			<v-btn
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
	
	<v-navigation-drawer 
						 class="hidden-sm-and-down"
						 app
						 clipped
						 :mini-variant.sync="drawer"
						 color="white"
						 permanent
						 >
		<v-list light>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-home</v-icon>
				</v-list-item-icon>
				<v-list-item-title>
					Home
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-compass</v-icon>
				</v-list-item-icon>
				<v-list-item-title>
					Explore
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-youtube-subscription</v-icon>
				</v-list-item-icon>
				<v-list-item-title>
					Subscriptions
				</v-list-item-title>
			</v-list-item>
			
			<v-divider color="#E0E0E0" v-if="!drawer"></v-divider>
			
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-play-box-multiple</v-icon>
				</v-list-item-icon>
				<v-list-item-title>
					Library
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-history</v-icon>
				</v-list-item-icon>
				<v-list-item-title>
					History
				</v-list-item-title>
			</v-list-item>
		</v-list>
		
		<v-divider color="#E0E0E0" v-if="!drawer"></v-divider>
			
		<v-list light v-if="!drawer">
			<v-container>
				<v-container>
					<v-list-title>
						Sign in to enjoy YouTube
					</v-list-title>
				</v-container>
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
			</v-container>
		</v-list>
		
		<v-divider color="#E0E0E0" v-if="!drawer"></v-divider>
		
		<v-list light v-if="!drawer">
			<v-container>
				<v-subtitle :style="{ margin:'5px 5px'}">BEST OF YOUTUBE</v-subtitle>
			</v-container>
			
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-music</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Music
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-trophy-variant-outline</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Sports
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-gamepad-variant-outline</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Gaming
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-filmstrip</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Movies
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-newspaper</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					News
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-access-point</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Live
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-hanger</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Fashion & Beauty
				</v-list-item-title>
			</v-list-item>
			<v-list-item link>
				<v-list-item-avatar color="grey" size="25">
					<v-icon dark small>mdi-lightbulb-on-outline</v-icon>
				</v-list-item-avatar>
				<v-list-item-title>
					Learning
				</v-list-item-title>
			</v-list-item>
		</v-list>
		
		<v-divider color="#E0E0E0" v-if="!drawer"></v-divider>
		
		<v-card 
				elevation="0"
				class="white grey--text" 
				v-if="!drawer"
				:style="{ margin:'3px 5px' }"
				>
			©YouTube, clone-coding project<br/>
			Build, by Cho yongsoo<br/>
			More, github.com/yongsoocho<br/>
		</v-card>
	</v-navigation-drawer>
	
	<v-main class="grey lighten-4">
		<Nuxt />
	</v-main>
</v-app>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		data() {
			return {
				drawer: true,
				searchOn: ''
			}
		},
		computed:{
			searchBtn() {
				if(this.searchOn) {
					return 'blue'
				} else {
					return 'grey'
				}
			}
		}
	});
</script>

<style scoped>
	#link {
		text-decoration:none;
	}
	.searchBtn {
		color: blue;
	}
</style>