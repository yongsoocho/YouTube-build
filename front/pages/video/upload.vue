<template>
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
			  <v-card
				class="mb-12"
				color="grey lighten-1"
				height="200px"
			  ></v-card>

			  <v-btn
				color="primary"
				@click="e1 = 2"
			  >
				Continue
			  </v-btn>

			  <v-btn text>
				Cancel
			  </v-btn>
			</v-stepper-content>

			<v-stepper-content step="2">
			  <v-card
				class="mb-12"
				color="grey lighten-1"
				height="200px"
			  ></v-card>

			  <v-btn
				color="primary"
				@click="e1 = 3"
			  >
				Continue
			  </v-btn>

			  <v-btn text>
				Cancel
			  </v-btn>
			</v-stepper-content>

			<v-stepper-content step="3">
			  <v-card
				class="mb-12"
				color="grey lighten-1"
				height="200px"
			  ></v-card>

			  <v-btn
				color="primary"
				@click="e1 = 1"
			  >
				Continue
			  </v-btn>

			  <v-btn text>
				Cancel
			  </v-btn>
			</v-stepper-content>
		  </v-stepper-items>
		</v-stepper>
	</v-container>
</template>

<script lang="ts">
	import Vue from 'vue';
	
	export default Vue.extend({
		data () {
    		return {
      			e1: 1,
    		}
  		},
	});
</script>

<style scoped>
	
</style>