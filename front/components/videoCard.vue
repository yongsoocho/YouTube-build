<template>
	<v-card
			color="#FAFAFA"
			width="350"
			height="300"
			tile
			elevation="0"
			>
		<v-img
			   width="350"
			   height="200"
			   src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
			   >
		</v-img>
		<div :style="{ display:'flex', marginTop:'10px', alignItems:'center' }">
			<div>
				<v-avatar
						  color="red"
						  size="36"
						  >
				</v-avatar>
			</div>
			<div>
				<span class="black--text font-weight-medium" :style="{ marginLeft:'5px' }">Video Title</span>
			</div>
		</div>
		<div class="grey--text">
			<span :style="{ marginLeft:'41px' }">creator<v-icon color="grey">mdi-circle-small</v-icon>view and day ago</span>
		</div>
	</v-card>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		
	});
</script>

<style scoped>

</style>