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
                <h1>Ristorante {{ this.restaurant.name }}</h1>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>