<template>
	<v-row>
		<v-col cols="12" md="4"></v-col>
		
		<v-col cols="12" md="4">
			<div :style="{ marginTop:'20vh', justifyContent:'center' }">
				<v-form>
					<v-card
							outlined
							width="450px"
							light
							:loading="loading"
							:style="{ display:'flex', alignItems:'center', flexDirection:'column' }"
							>
						<span 
							  class="font-weight-medium" 
							  :style="{ fontSize:'22px', display:'flex', alignItems:'center', marginTop:'30px' }"
							  >
							<v-icon x-large color="red">mdi-youtube</v-icon>
							&nbsp;YouTube
						</span>
						<span
							  class="font-weight-medium"
							  :style="{ fontSize:'18px', display:'block', marginTop:'15px' }">
							Sign in
						</span>
						<span
							  class="font-weight-regular grey--text"
							  :style="{ fontSize:'15px', display:'block',margin:'0px 12px' }">
							to continue to YouTube
						</span>
						<v-container :style="{ display:'block' }">
							<v-text-field
										  label="Email"
										  clearable
										  type="text"
											v-model="email"
										  >
							</v-text-field>
							<v-text-field
										  label="password"
										  clearable
										  type="password"
										  :style="{ marginBottom:'10px' }"
											v-model="password"
										  >
							</v-text-field>
							<v-btn
								   dark
								   block
								   color="blue"
								   :style="{ margin:'10px 0px' }"
									 @click="onClickLogin"
								   >
								Log in
							</v-btn>
							<v-btn
								   dark
								   block
								   color="#E53935"
								   >
								<v-icon dense>mdi-google</v-icon>
								&nbsp;Google
							</v-btn>
							<v-btn
								   to="/signUp"
								   nuxt
								   light
								   color="blue"
								   text
								   :style="{ marginTop:'30px' }"
								   >
								Create Account<v-icon dense>mdi-open-in-new</v-icon>
							</v-btn>
						</v-container>
					</v-card>
				</v-form>
			</div>
		</v-col>
		
		<v-col cols="12" md="4"></v-col>
	</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import { EventBus } from "../bus/bus.js";
	
	export default Vue.extend({
		
		data() {
			return {
				loading: EventBus.loading,
				email:'',
				password:''
			}
		},
		
		methods: {
			onClickLogin() {
				EventBus.loading = true;
				return this.$store.dispatch('user/postLogin', {
					email: this.email,
					password: this.password
				})
				.then(() => {
					EventBus.loading = false;
					this.$router.push('/');
				})
				.catch((err) => {
					console.log(`onClickLogin Error: ${err}`)
				})
			}
		},
		
		computed: {
			
		}
		
	});
</script>

<style scoped>
</style>