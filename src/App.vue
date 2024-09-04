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
	<router-view></router-view>
</template>

<style scoped></style>
