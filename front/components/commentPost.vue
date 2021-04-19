<template>
	<div :style="{ display:'flex', alignItems:'center' }">
		<div>
			<v-avatar
					  color="red"
					  size="49"
					  >
			</v-avatar>
		</div>
		<div :style="{ width:'80%' }">
			<v-text-field
						  :style="{ marginLeft:'10px' }"
						  light
						  placeholder="Add a public comment..."
						  clearable
						  v-model="commentText"
						  >
			</v-text-field>
		</div>
		<div>
			<v-btn
				   :style="{ marginLeft:'50px' }"
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