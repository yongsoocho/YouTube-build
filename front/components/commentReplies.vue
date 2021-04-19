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
				<v-btn x-small fab text :class="{ likeToggleBlue:true, likeToggleGrey:false }">
						<v-icon x-small>mdi-thumb-up</v-icon>
				</v-btn><span :class="{ likeToggleBlue:true, likeToggleGrey:false }">13K</span>
				<span>&nbsp;&nbsp;</span>
				<v-btn x-small fab text :class="{ likeToggleBlue:false, likeToggleGrey:true }">
					<v-icon x-small>mdi-thumb-down</v-icon>
				</v-btn><span :class="{ likeToggleBlue:false, likeToggleGrey:true }">1K</span>
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
	.likeToggleBlue {
		color:#2196F3;
		font-size:14px;
	}
	.likeToggleGrey {
		color:#9E9E9E;
		font-size:14px;
	}
</style>