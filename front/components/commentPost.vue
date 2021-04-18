<template>
	<div :style="{ display:'flex' }">
		<div>
			<v-avatar
					  color="red"
					  size="49"
					  >
			</v-avatar>
		</div>
		<div>
			<v-text-field
						  light
						  placeholder="Add a public comment..."
						  clearable
						  v-model="commentText"
						  >
			</v-text-field>
		</div>
		<div>
			<v-btn
				   v-show="commentText"
				   dark
				   tile
				   color="blue"
				   >
				Comment
			</v-btn>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		data() {
			return {
				commentText : '',
			}
		},
	});
</script>

<style scoped>
</style>