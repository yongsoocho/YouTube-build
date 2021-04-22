<template>
<v-app>
	<AppBar></AppBar>
	
	<NavigationDrawer></NavigationDrawer>
	
	<v-main class="grey lighten-5">
		<Nuxt />
	</v-main>
</v-app>
</template>

<script lang="ts">
	import Vue from "vue";
	import AppBar from "@/components/appBar.vue";
	import NavigationDrawer from "@/components/navigationDrawer.vue";
	
	export default Vue.extend({
		data() {
			return {
				
			}
		},
		
		components: {
			AppBar,
			NavigationDrawer
		},
		
		computed: {

		},
		
		methods: {
			
		}
	});
</script>

<style scoped>
	.searchBtn {
		color: blue;
	}
</style>