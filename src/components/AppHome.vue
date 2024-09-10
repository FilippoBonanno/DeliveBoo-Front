<script>
import axios from 'axios';
import TypologyCard from './TypologyCard.vue';
import RestaurantCard from './RestaurantCard.vue';
import skeleton from 'primevue/skeleton';
import Jumbotrone from './Jumbotrone.vue';


export default {
    name: 'AppHome',

    components: {
        TypologyCard,
        RestaurantCard,
        skeleton,
        Jumbotrone
    },

    data() {
        return {
            categories: '',
            categoriesSelected: [],
            restaurants: '',
            isLoading: true,
            notFound: false
        }
    },

    methods: {
        getRestaurants() {
            axios.get('http://localhost:8000/api/restaurants', { params: { categories: this.categoriesSelected } }).then((response) => {
                console.log(response.data)
                this.restaurants = response.data;
                if (!response.data[0]) {
                    this.notFound = true;
                } else {
                    this.notFound = false;
                }
                console.log(this.categoriesSelected);

            })
        },

        getSingleRestaurant(id) {
            router.push({
                name: 'single-restaurant',
                params: { id: id }
            })
        },

        handleEmit(categoriesSelected) {
            console.log('arraySent', categoriesSelected)
            this.categoriesSelected = categoriesSelected
            this.getRestaurants();
        }
    },


    mounted() {
        axios.get('http://localhost:8000/api/categories').then(response => {
            console.log(response);
            this.categories = response.data;
            console.log(this.categories)
            this.isLoading = false
        }),
            this.getRestaurants();
    }
}
</script>

<template>
    <main>


        <Jumbotrone @arraySent="handleEmit" />


        <!-- <div class="container TypologyContainer">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="d-flex flex-wrap justify-content-center">
                        <div v-if="isLoading" v-for="item in 11" class="d-flex p-2">
                            <skeleton shape="circle" size="7rem" class="mr-2"></skeleton>
                        </div>

                        <template v-for="item in categories">
                            <div class="d-flex flex-column align-items-center p-2">
                                <TypologyCard @selected="getCategory(item.name), getRestaurants()" :name="item.name" />
                            </div>
                        </template>
</div>
</div>
</div>
</div> -->


        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center flex-wrap">
                    <div v-if="restaurants.length > 0">
                        <template v-for="restaurant in restaurants">

                            <router-link class="btn" :to="{ name: 'single-restaurant', params: { id: restaurant.id } }">
                                <RestaurantCard @click="getSingleRestaurant(restaurant.id)" :imageSrc="restaurant.img"
                                    :restaurantName="restaurant.name" :restaurant="restaurant" />
                            </router-link>
                        </template>
                    </div>
                    <div v-else-if="notFound">
                        <h2 class="text-danger">
                            La richiesta fatta da costei non ha prodotto alcun risultato
                        </h2>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<style scoped>
/* .p-inputtext {
    background-color: white !important;
    color: black !important;
}

.p-accordion {
    background-color: white !important;
    color: black !important;
} */

.TypologyContainer {
    margin-top: 5rem;

}

.typology-name {
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    margin-top: 5px;
    font-family: "Permanent Marker";

}

.typology-card.selected {
    transform: scale(1.1);
    /* Effetto zoom */
    box-shadow: 0 0 15px 5px rgba(32, 32, 32, 0.5);
    /* Effetto luce gialla sotto */
}
</style>