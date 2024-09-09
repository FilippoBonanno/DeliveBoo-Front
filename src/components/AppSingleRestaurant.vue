<script>
import axios from 'axios';
import { store } from '../../data/storeCart.js';

export default {
    name: 'AppSingleRestaurant',

    components: {
        store
    },

    data() {
        return {
            restaurant: '',
        }
    },

    methods: {
        handleAddToCart(dish) {
            store.addToCart(dish);
        }

    },

    mounted() {
        axios.get('http://localhost:8000/api/restaurants/' + this.$route.params.id).then((response) => {
            console.log(response);
            this.restaurant = response.data;
            console.log(this.restaurant);
        });
        console.log(store.getCart(), 'cart');
    }
}
</script>

<template>

    <div class="menu-section mt-5">
        <div class="title-section d-flex flex-column">
            <h1>{{ this.restaurant.name }}</h1>
            <h2>Menù</h2>
        </div>
        <div class="menu-items">
            <div class="menu-item" v-for="dish in this.restaurant.dishes">
                <h3>{{ dish.name }}</h3>
                <p>{{ dish.description }}</p>
                <div class="d-flex justify-content-between"><span class="price">{{ parseFloat(dish.price).toFixed(2) }}
                        €</span>
                    <button class="price" @click="handleAddToCart(dish)">Aggiungi al Carrello</button>
                </div>

                <img :src="dish.img" :alt="dish.name" />
            </div>
        </div>

    </div>




</template>

<style scoped>
.menu-section {
    text-align: center;
    padding: 50px 0;
    background-color: #f8f8f8;

}

.title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}


h2 {
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: bold;
}

.menu-items {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.menu-item {
    max-width: 300px;
    text-align: left;
    border-radius: 10px;
    background-color: #5B85AA;
    color: white;
}

.menu-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 0.5rem 0.5rem 1rem;
}

.menu-item p {
    font-size: 14px;
    color: #ffffff;
    margin-left: 0.5rem;
    margin-bottom: 15px;
}

.menu-item img {
    width: 100%;
    border-radius: 5px;
}

.price {
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
}
</style>