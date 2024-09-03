<script>
import axios from 'axios';



export default {
	name: 'App',

	components: {
		
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
	<router-link :to="{ name: 'home' }">home</router-link>
  <router-link :to="{ name: 'prova' }">prova</router-link>
	<router-view></router-view>
</template>

<style scoped>
</style>

