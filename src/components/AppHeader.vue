<script>
import AppCart from './AppCart.vue';
import { store } from '../../data/storeCart.js';


export default {
    name: 'AppHeader',

    components: {
        AppCart,
        store
    },

    data() {
        return {

        }
    },

    methods: {
        getImg(path) {
            let risultato = new URL("../assets/img/" + path, import.meta.url);
            return risultato.href;
        },
        countItems() {
            let cart = store.getCart();
            return cart.length;
        }
    },
    computed: {
        setCounter() {
            return this.countItems();
        }
    },

    mounted() {

    }
}
</script>

<template>
    <header class="bg-warning text-white mb-5">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-12 d-flex justify-content-between align-items-center py-2">
                    <!-- Logo e Titolo -->
                    <div class="d-flex align-items-center">
                        <img src="../assets/img/Deliveboo-logo-Byke.png" alt="DeliveBoo Logo" class="logo-img">
                        <h1 class="title-logo ms-3 mb-0">DeliveBoo</h1>
                    </div>
                    <!-- Navigazione e Carrello -->
                    <div class="d-flex align-items-center">
                        <div class="btn btn-primary me-3 rounded-pill custom-btn">
                            <router-link :to="{ name: 'home' }" class="text-white text-decoration-none">
                                <i class="fa-solid fa-house"></i> Home
                            </router-link>
                        </div>
                        <button class="btn btn-primary cart-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span v-if="countItems() > 0" class="badge bg-danger badge-cart">{{ countItems() }}</span>
                        </button>
                        <AppCart />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Aggiustamenti stilistici per i componenti */
.logo-img {
    height: auto; /* Mantiene le proporzioni del logo */
    max-height: 3rem; /* Imposta un'altezza massima per il logo */
}

.title-logo {
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: #5B85AA;
    font-size: 1.5rem; /* Imposta una dimensione di font maggiore per il titolo */
}

.custom-btn {
    background-color: #5B85AA;
    color: white;
    padding: 10px 20px;
}

.custom-btn:hover {
    background-color: #0f5ea3;
}

.cart-btn {
    position: relative;
    color: white;
    background-color: #5B85AA;
    border-radius: 50px;
    padding: 10px 20px;
}

.cart-btn:hover {
    background-color: #0f5ea3;
}

.badge-cart {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    border-radius: 50%;
    padding: 3px 8px; /* Riduce il padding per i dispositivi mobili */
    font-size: 0.75rem; /* Riduce la dimensione del font */
}
</style>

