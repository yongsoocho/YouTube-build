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
							<v-text-field
										  label="password check"
										  clearable
										  type="password"
										  :style="{ marginBottom:'10px' }"
											v-model="passwordCheck"
										  >
							</v-text-field>
							<v-text-field
										  label="name"
										  clearable
										  type="text"
										  :style="{ marginBottom:'10px' }"
											v-model="name"
										  >
							</v-text-field>
							<v-btn
								   dark
								   block
								   color="blue"
								   :style="{ margin:'10px 0px' }"
									 @click="onClickSignUp"
								   >
								Signup
							</v-btn>
							<v-btn
								   to="/signIn"
								   nuxt
								   light
								   color="blue"
								   text
								   :style="{ marginTop:'30px' }"
								   >
								Back to Login<v-icon dense>mdi-open-in-new</v-icon>
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
				loading:EventBus.loading,
				email:'',
				password:'',
				passwordCheck:'',
				name:''
			}
		},
		
		methods: {
			
			onClickSignUp() {
				EventBus.loading = true;
				return this.$store.dispatch('user/postSignUp', {
					email:this.email,
					password:this.password,
					name:this.name
				})
				.then(() => {
					EventBus.loading = false;
					this.$router.push('/')
				})
				.catch((err) => {
					console.log(`onClickSignUp Error: ${err}`)
				});
			}
			
		},
		
		middleware: ['onlyGuest']
		
	});
</script>

<style scoped>
</style>