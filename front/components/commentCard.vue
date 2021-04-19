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
					<v-btn small fab text :class="{ likeToggleBlue:true, likeToggleGrey:false }">
						<v-icon small>mdi-thumb-up</v-icon>
					</v-btn><span :class="{ likeToggleBlue:true, likeToggleGrey:false }">13K</span>
					<span>&nbsp;&nbsp;</span>
					<v-btn small fab text :class="{ likeToggleBlue:false, likeToggleGrey:true }">
						<v-icon small>mdi-thumb-down</v-icon>
					</v-btn><span :class="{ likeToggleBlue:false, likeToggleGrey:true }">1K</span>
				</div>
			<!-- -->
				<v-btn
					   tile
					   small
					   color="blue"
					   text
					   @click="onClickOpenReplies"
					   >
					View replies
				</v-btn>
        		<CommentReplies
								v-if="repliesToggle"
								:style="{ marginLeft:'49px', marginTop:'10px' }"
								v-for="t of replies"
								:key="t"
								>
				</CommentReplies>
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
				type: Object,
			}	
		},
		
		components: {
			CommentReplies,
		},
		
		data() {
			return {
				replies:this.Comments.replies,
				repliesToggle: false
			}
		},
		
		methods: {
			onClickOpenReplies() {
				if(!this.repliesToggle) {
					return this.repliesToggle = true;
				} else {
					return this.repliesToggle = false;
				}
			}
		}
	});
</script>

<style scoped>
	.likeToggleBlue {
		color:#2196F3;
		font-size:15px;
	}
	.likeToggleGrey {
		color:#9E9E9E;
		font-size:15px;
	}
</style>