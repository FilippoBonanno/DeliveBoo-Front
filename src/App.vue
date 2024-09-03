<script>
import axios from 'axios';
import AppHeader from "./components/AppHeader.vue"



export default {
	name: 'App',

	components: {
		AppHeader,
	},

	data() {
		return {

		}
	},

	methods: {

	},

	mounted() {

	}
}

</script>

<template>
  <AppHeader />
	<router-link :to="{ name: 'home' }">home</router-link>
  <router-link :to="{ name: 'prova' }">prova</router-link>
	<router-view></router-view>
</template>

<style scoped>
</style>

