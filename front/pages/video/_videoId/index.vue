<template>
<v-row>
	<v-col cols="12" md="1" class="hidden-sm-and-down"></v-col>
	
	<v-col cols="12" md="8">
		<v-container>
			<video class="video" controls preload="auto" type="video/mp4">
				<source :src=`https://ytback.run.goorm.io/upload/${VideoInfo._id}` type="video/mp4">
			</video>
			<!-- -->
			<div>
				<span class="blue--text d-block">{{VideoInfo.hashtag}}</span>
				<span id="VideoTitle" class="black--text d-block">{{VideoInfo.title}}</span>
			</div>
			<!-- -->
			<div :style="{ display:'flex' }">
				<div>
					<span class="grey--text">{{VideoInfo.createdAt}}</span>
				</div>
				
				<v-spacer></v-spacer>
				
				<div>
					<v-btn small fab text :class="{ likeToggleBlue:true, likeToggleGrey:false }">
						<v-icon>mdi-thumb-up</v-icon>
					</v-btn><span :class="{ likeToggleBlue:true, likeToggleGrey:false }">13K</span>
					<span>&nbsp;&nbsp;</span>
					<v-btn small fab text :class="{ likeToggleBlue:false, likeToggleGrey:true }">
						<v-icon>mdi-thumb-down</v-icon>
					</v-btn><span :class="{ likeToggleBlue:false, likeToggleGrey:true }">1K</span>
				</div>
			</div>
			<!-- -->
			<v-divider color="#E0E0E0"></v-divider>
			<!-- -->
			<div :style="{ display:'flex', margin:'15px 0px' }">
				<v-avatar
						  color="red"
						  size="49"
						  >
				</v-avatar>
				<div class="align-self-center" :style="{ marginLeft:'10px' }">
					<span class="black--text text-h5 d-block">Creator</span>
					<span class="grey--text text-body-2 d-block">315K subscribers</span>
				</div>
				
				<v-spacer></v-spacer>
				
				<v-btn
					   large
					   tile
					   color="red"
					   dark
					   v-show="!scriptToggle"
					   @click="onClickScriptToggle"
					   >
					SUBSCRIBE
				</v-btn>
				<v-btn
					   large
					   tile
					   color="red"
					   dark
					   outlined
					   v-show="scriptToggle"
					   @click="onClickScriptToggle"
					   >
					DISSUBSCRIBE
				</v-btn>
			</div>
			
			<div :style="{ marginLeft:'59px', marginTop:'20px' }">
				<p v-show="!descriptToggle" class="black--text">
					{{VideoInfo.description.slice(0,13)}}
				</p>
				<p v-show="descriptToggle" class="black--text">
					{{VideoInfo.description}}
				</p>
				<v-btn color="blue" small text tile @click="onClickDescriptToggle" :style="{ marginBottom:'20px' }">show more</v-btn>
			</div>
			<!-- -->
			<v-divider color="#E0E0E0"></v-divider>
			<!-- -->
			<CommentPost :style="{ marginBottom:'30px', marginTop:'20px' }"></CommentPost>
			<!-- -->
			<CommentCard v-for="i of test" :key="i.id" :Comments="i"></CommentCard>
		</v-container>
	</v-col>
	
	<v-col cols="12" md="3" class="hidden-sm-and-down">
		<VideoColumn :videoList="test"></VideoColumn>
	</v-col>
</v-row>
</template>

<script lang="ts">
	import Vue from "vue";
	import CommentPost from "@/components/commentPost.vue";
	import CommentCard from "@/components/commentCard.vue";
	import VideoColumn from "@/components/videoColumn.vue";
	
	export default Vue.extend({
		components: {
			CommentPost,
			CommentCard,
			VideoColumn
		},
		
		data() {
			return {
				test: [
					{
						id:1,
						replies:[1,1,1]
					},
					{
						id:2,
						replies:[1,1,1]
					},
					{
						id:3,
						replies:[1,1,1]
					},
					{
						id:4,
						replies:[1,1,1]
					},
					{
						id:5,
						replies:[1,1,1]
					}
				],
				descriptToggle:false,
				scriptToggle:false,
			}
		},
		
		methods: {
			
			onClickScriptToggle() {
				if(!this.scriptToggle) {
					return this.scriptToggle = true;
				} else {
					return this.scriptToggle = false;
				}
			},
			
			onClickDescriptToggle() {
				if(!this.descriptToggle) {
					return this.descriptToggle = true;
				} else {
					return this.descriptToggle = false;
				}
			},
			
		},
		
		asyncData(ctx) {
			const { videoId } = ctx.params;
			
			ctx.store.dispatch('video/findVideoById', { videoId });
		},
		
		computed: {
			VideoInfo() {
				return this.$store.state.video.VideoInfo;
			}
		}
			
		
	});
</script>

<style scoped>
	#VideoTitle {
		font-size:24px;
		font-weight:600;
	}
	.likeToggleBlue {
		color:#2196F3;
	}
	.likeToggleGrey {
		color:#9E9E9E;
	}
	.video {
		width: 100%;
  	height: auto;
	}
</style>