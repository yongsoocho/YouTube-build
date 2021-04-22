<template>
	<v-container>
		<div :style="{ display:'flex', marginBottom:'15px' }"  v-for="i in videoList" :key="i.id">
			<div ref="my">
				<v-img 
					   width="150" 
					   height="100" 
					   src="http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg"></v-img>
			</div>
			<div :style="{ marginLeft:'15px' }">
				<span class="black--text d-block text-h6">Video Title</span>
				<span class="grey--text d-block">Creator</span>
				<span class="grey--text d-block">View & day ago</span>
			</div>
		</div>
	</v-container>
</template>

<script lang="ts">
	import Vue from 'vue';
	
	export default (Vue).extend({
		props: {
			videoList: {
				type: Array
			}
		}
	});
</script>

<style scoped>
	
</style>