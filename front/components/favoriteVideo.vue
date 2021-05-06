<template>
	<v-container class="white">
		<VideoColumn :videoList="test"/>
	</v-container>
</template>

<script lang="ts">
	import Vue from "vue";
	import VideoColumn from "~/components/videoColumn.vue"
	
	export default Vue.extend({
		data() {
			return {
				test: [
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:1,
						replies:[1,1,1]
					}
				]
			}
		},
		
		components: {
			VideoColumn
		}
	});
</script>

<style scoped>
</style>