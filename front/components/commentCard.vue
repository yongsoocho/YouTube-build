<template>
<div>
	<div :style="{ display:'flex' }">
		<div>
			<v-avatar
					  color="red"
					  size="49"
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
			<!-- -->
			<v-expansion-panels>
				<v-expansion-panel>
					<v-expansion-panel-header>
						<v-btn
							   color="blue"
							   text
							   >
							View replies
						</v-btn>
       				</v-expansion-panel-header>
					<v-expansion-panel-content>
         				<CommentReplies
										:style="{ marginLeft:'49px' }"
										v-for="t of replies"
										:key="t"
										>
						</CommentReplies>
       				</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
			<!-- -->
		</div>
	</div>
	<!-- -->
</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import CommentReplies from "@/components/commentReplies.vue";
	
	export default Vue.extend({
		props:{
			Comments:{
				type: Object
			}	
		},
		
		components: {
			CommentReplies,
		},
		
		data() {
			return {
				replies:this.Comments.replies,
			}
		}
	});
</script>

<style scoped>
</style>