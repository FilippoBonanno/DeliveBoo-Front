<script>
import axios from 'axios';
import TypologyCard from './TypologyCard.vue';
import RestaurantCard from './RestaurantCard.vue';
import skeleton from 'primevue/skeleton';

export default {
    name: 'AppHome',

    components: {
        TypologyCard,
        RestaurantCard,
        skeleton,
    },

    data() {
        return {
            categories: '',
            categoriesSelected: [],
            restaurants: '',
            isLoading: true
        }
    },

    methods: {
        getRestaurants() {
            axios.get('http://localhost:8000/api/restaurants', { params: { categories: this.categoriesSelected } }).then((response) => {
                console.log(response)
                this.restaurants = response.data;
            })
        },

        getCategory(name) {

            if (this.categoriesSelected.includes(name)) {
                let x = this.categoriesSelected.indexOf(name)
                this.categoriesSelected.splice(x, 1)
                console.log(this.categoriesSelected);
            } else {
                console.log("cliccato", name)
                this.categoriesSelected.push(name)
                console.log(this.categoriesSelected)
            }
        },

        getSingleRestaurant(id) {
            router.push({
                name: 'single-restaurant',
                params: { id: id }
            })
        }

    },

    mounted() {
        axios.get('http://localhost:8000/api/categories').then(response => {
            console.log(response);
            this.categories = response.data;
            console.log(this.categories)
            this.isLoading = false
        })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div>
                        <h1>Scegli cosa mangiare</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="d-flex flex-wrap justify-content-center">
                        <div v-if="isLoading" v-for="item in 11" class="d-flex p-5 mb-1">
                            <skeleton shape="circle" size="7rem" class="mr-2"></skeleton>
                        </div>

                        <template v-for="item in categories">
                            <div>
                                <TypologyCard @click="getCategory(item.name)" :typologyName="item.name"
                                    :imageSrc="item.img" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <button @click="getRestaurants()" class="btn btn-primary">Invia</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center flex-wrap">
                    <template v-for="restaurant in this.restaurants">

                        <router-link class="btn" :to="{ name: 'single-restaurant', params: { id: restaurant.id } }">
                            <RestaurantCard @click="getSingleRestaurant(restaurant.id)"
                                :restaurantName="restaurant.name" :imageSrc="restaurant.img" />
                        </router-link>
                    </template>
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
</style>