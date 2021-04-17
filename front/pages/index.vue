<template>
	<v-container>
		<v-row>
			<v-container>
				<v-col cols="12">
					<v-title 
							 :style="{ fontSize:'24px' }"
							 class="black--text"
							 >
						Trending
					</v-title>
					<v-divider color="grey"></v-divider>
				</v-col>
			</v-container>
		</v-row>
		<v-row>
			<v-col cols="12" md="3" v-for="i in text1" :key="i">
				<v-card
				  class="mx-auto"
				  max-width="344"
				  outlined
				>
				  <v-list-item three-line>
					<v-list-item-content>
					  <div class="overline mb-4">
						OVERLINE
					  </div>
					  <v-list-item-title class="headline mb-1">
						Headline 5
					  </v-list-item-title>
					  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-avatar
					  tile
					  size="80"
					  color="grey"
					></v-list-item-avatar>
				  </v-list-item>

				  <v-card-actions>
					<v-btn
					  outlined
					  rounded
					  text
					>
					  Button
					</v-btn>
				  </v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<v-row>
			<v-container>
				<v-col cols="12">
					<v-title 
							 :style="{ fontSize:'24px' }"
							 class="black--text"
							 >
						Daily
					</v-title>
					<v-divider color="grey"></v-divider>
				</v-col>
			</v-container>
		</v-row>
		<v-row>
			<v-col cols="12" md="3" v-for="i in text2" :key="i">
				<v-card
				  class="mx-auto"
				  max-width="344"
				  outlined
				>
				  <v-list-item three-line>
					<v-list-item-content>
					  <div class="overline mb-4">
						OVERLINE
					  </div>
					  <v-list-item-title class="headline mb-1">
						Headline 5
					  </v-list-item-title>
					  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
					</v-list-item-content>

					<v-list-item-avatar
					  tile
					  size="80"
					  color="grey"
					></v-list-item-avatar>
				  </v-list-item>

				  <v-card-actions>
					<v-btn
					  outlined
					  rounded
					  text
					>
					  Button
					</v-btn>
				  </v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
 
<script lang="ts">
	import Vue from "vue";

	const text2 = new Array(16).fill(0);
	
	export default Vue.extend({
		data() {
			return {
				text1:[1, 2, 3, 4, 5, 6, 7, 8],
				text2: text2
			}
		}
	});
</script>

<style scoped>
</style>