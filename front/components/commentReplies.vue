<template>
	<div :style="{ display:'flex' }">
		<div>
			<v-avatar
					  color="red"
					  size="25"
					  >
			</v-avatar>
		</div>
		<!-- -->
		<div :style="{ marginLeft:'10px' }">
			<div>
				<span class="black--text">Creator</span>
				<span class="grey--text">day ago</span>
			</div>
			<span class="black--text">Text Content</span>
			<div>
				<v-btn-toggle>
					<v-btn>Like 100</v-btn>
					<v-btn>Dislike 2</v-btn>
				</v-btn-toggle>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		
	});
</script>

<style scoped>
</style>