<script>
import axios from 'axios';

export default {
    name: 'AppSingleRestaurant',

    components: {
       
    },

    data() {
        return {
            restaurant: '',
        }
    },

    methods: {

    },

    mounted() {
        axios.get('http://localhost:8000/api/restaurants/' + this.$route.params.id).then((response) => {
            // + this.$route.params.id
            console.log(response);
            this.restaurant = response.data;
            console.log(this.restaurant);
        });
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h1>{{ this.restaurant.name }}</h1>
            </div>
            <div class="col-12 d-flex justify-content-between">
                <template v-for="dish in this.restaurant.dishes">
                    <h2>{{ dish.name }}</h2>
                </template>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>