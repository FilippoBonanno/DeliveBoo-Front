<script>
import axios from 'axios';
import { store } from '../../data/storeCart.js';
import Skeleton from 'primevue/skeleton';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
    name: 'AppSingleRestaurant',

    components: {
        store,
        Skeleton,
        Dialog,
        Button
    },

    data() {
        return {
            restaurant: '',
            isLoading: true,
            store: store
        }
    },

    methods: {
        handleAddToCart(dish, restaurant) {
            store.addToCart(dish, restaurant);
        },
        handleConfirm(dish, restaurant) {
            store.clearCart();
            this.handleAddToCart(dish, restaurant);
            store.confirmModal = false
        }

    },

    computed: {
        checkModal() {
            return store.confirmModal
        }
    },

    mounted() {
        axios.get('http://localhost:8000/api/restaurants/' + this.$route.params.slug).then((response) => {
            console.log(response);
            this.restaurant = response.data;
            console.log(this.restaurant);
            this.isLoading = false
        });
        console.log(store.getCart(), 'cart');
    }
}
</script>

<template>
    <div class="menu-section mt-5">
        <div class="title-section d-flex flex-column align-items-center mb-4">
            <div v-if="isLoading">
                <Skeleton height="3rem" width="15rem" class="mb-2" borderRadius="16px"></Skeleton>
            </div>
            <h1 v-else>{{ restaurant.name }}</h1>
            <h2>Menù</h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="menu-items d-flex flex-wrap justify-content-center">
                        <template v-if="!isLoading">
                            <div class="menu-item me-3 ms-3 mb-4" v-for="dish in restaurant.dishes" :key="dish.id">
                                <h3>{{ dish.name }}</h3>
                                <p>{{ dish.description }}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">€ {{ parseFloat(dish.price).toFixed(2) }}</span>
                                    <button class="btn-add-to-cart" @click="handleAddToCart(dish, restaurant)">Aggiungi
                                        al Carrello</button>
                                </div>
                                <img :src="dish.img" :alt="dish.name" />
                                <!-- Modale -->
                                <Dialog v-model:visible="store.confirmModal" modal header="Conferma"
                                    :style="{ width: '25rem' }">
                                    <div class="mb-3"> Se acquisti da un altro ristorante il tuo carrello verrà
                                        svuotato. Vuoi
                                        continuare?</div>
                                    <div class="d-flex justify-content-end gap-2">
                                        <Button class="m-2" type="button" label="Annulla" severity="secondary"
                                            @click="store.confirmModal = false"></Button>
                                        <Button class="m-2" type="button" label="Conferma" severity="danger"
                                            @click="handleConfirm(dish, restaurant)"></Button>
                                    </div>
                                </Dialog>
                            </div>
                        </template>
                        <template v-else>
                            <div class="d-flex flex-wrap justify-content-center">
                                <Skeleton shape="square" size="22.5rem" class="ms-2 mb-4" v-for="x in 3" :key="x">
                                </Skeleton>
                            </div>
                        </template>
                    </div>
                </div>
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
    margin-bottom: 30px;
}

h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
}

h2 {
    font-family: "Times New Roman", Times, serif;
    font-size: 1.5rem;
    font-weight: bold;
}

.menu-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.menu-item {
    max-width: 300px;
    text-align: left;
    border-radius: 10px;
    background-color: #5B85AA;
    color: white;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 0.5rem;
}

.menu-item p {
    font-size: 0.9rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.menu-item img {
    width: 100%;
    border-radius: 5px;
    margin-top: 0.5rem;
}

.price {
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: bold;
}

.btn-add-to-cart {
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
}

.btn-add-to-cart:hover {
    background-color: #ff3d2e;
}
</style>
