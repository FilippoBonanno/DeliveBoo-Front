<script>
import { RouterLink } from 'vue-router';


export default {
    name: 'RestaurantCard',

    components: {

    },

    data() {
        return {

        }
    },

    props: {
        imageSrc: {
            required: true,
        },
        
        restaurantName: {
            type: String,
            required: true,
        },
        restaurant: {
            type: Object,
            required: true,
        }
    },

    methods: {

    },

    mounted() {

    }
}
</script>

<template>
    <div class="card-container">
        <div class="image-container">
            <span class="typology-name">
                
                <template v-for="category in restaurant.categories">
                {{  category.name  }} <br>
                </template>
            </span> 
            <img :src="imageSrc"  />
            
            
            <!-- RICORDARSI DI DECOMMENTARE LE PROPS       :src="imageSrc"    -->
        </div>
        <h3 class="restaurant-name">{{ restaurantName }}</h3>
        
    </div>
</template>

<style scoped>
.card-container {
    width: 250px;
    height: 150px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 20px;
}

.image-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.image-container img {
    width: 100%;
    display: block;
    border-radius: 12px;
}

.typology-name {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
}

.restaurant-name {
    margin-top: 10px;
    font-weight: bold;
    font-size: 18px;
    font-family: "Permanent Marker";
    color: #000;
    text-align: start;
    margin-left: 1rem;
    letter-spacing: normal;
    word-spacing: 0px;
}

img {
    width: 100%;
    height: 100%;
}

.restaurant-name {
    color: #000;
    text-align: start;
    margin-top: 10px;
}
</style>