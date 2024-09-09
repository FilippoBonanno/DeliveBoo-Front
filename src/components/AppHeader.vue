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
    <header class="orange mb-5">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 h-100 d-flex justify-content-between align-items-center ">
                    <div class="h-100 d-flex align-items-center animate__animated animate__lightSpeedInLeft">
                        <img src="../assets/img/Deliveboo-logo-Byke.png">
                        <h1 class="title-logo ms-3 mb-0">DeliveBoo</h1>
                    </div>
                    <div class="d-flex">
                        <div class="me-3 btn custom-btn">
                            <router-link :to="{ name: 'home' }"><i class="fa-solid fa-house"></i> Home</router-link>
                        </div>

                        <div class=" cart-btn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span v-if="countItems() > 0" class="badge badge-cart">{{ countItems() }}</span>
                        </div>
                        <AppCart />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
    font-weight: bold;

}

header {
    height: 5rem;
    width: 100%;
    background-color: #F46036;
    position: fixed;
    top: 0;
    z-index: 1050;
}

.title-logo {
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: #5B85AA;
}


.h-100 {
    height: 100%;
}

img {
    height: 100%;
}

.custom-btn {
    background-color: #5B85AA;
    /* Verde simile */
    color: white;
    border-radius: 50px;
    /* Per il bordo arrotondato */
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
    padding: 5px 10px;
    font-size: 12px;
}
</style>