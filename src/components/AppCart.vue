<script>
import { store } from '../../data/storeCart.js';

export default {
    name: 'AppSingleRestaurant',

    components: {
        store
    },

    data() {
        return {
            cart: store.getCart(),
        }
    },

    methods: {
        getCart() {
            console.log(store.getCart(), 'cart');
            return store.getCart();
        },
        handleRemoveFromCart(itemid) {
            store.removeFromCart(itemid);
            console.log(store.getCart(), 'cart');
        },
        handleClearCart() {
            console.log(store.getCart(), 'cart');
            store.clearCart();
        },
        getTotalPrice() {
            let sum = 0;
            let cart = store.getCart()
            for (let i = 0; i < cart.length; i++) {
                //convertire il numero in stringa in numero decimale
                cart[i].price = parseFloat(cart[i].price);
                sum += cart[i].price;
                console.log(this.cart[i].price, sum);
            }
            return sum.toFixed(2);
        },
        getPrice(price) {
            return price.toFixed(2);
        }

    },
    computed: {
        totalPrice() {
            return this.getTotalPrice(); // Chiamata alla funzione all'interno del computed
        }
    },

    mounted() {
        console.log(store.getCart(), 'cart');
    }
}
</script>




<template>
    <!-- DATI CONTENENTI IL CARRELLO -->
    <div class="offcanvas bg-dark text-white offcanvas-end " data-bs-scroll="true" data-bs-backdrop="false"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 v-if="getCart().length == 0" class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo Carrello
                e' Vuoto
            </h5>
            <h5 v-else class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div class="offcanvas-body">
                <!-- Placeholder prodotti nel carrello -->
                <ul class="list-group mb-3" v-if="getCart().length !== 0">
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-for="item in getCart()">
                        <div>
                            <h6 class="my-0">{{ item.name }}</h6>
                            <small class="text-muted">Descrizione breve</small>
                            <div @click="handleRemoveFromCart(item.id)"><small
                                    class="text-muted mt-1 btn btn-danger">Elimina</small></div>
                        </div>
                        <span class="text-muted">€{{ getPrice(item.price) }}</span>
                    </li>
                </ul>
                <div v-if="getCart().length !== 0" @click="handleClearCart()"><small
                        class="text-muted mt-1 btn btn-danger">Svuota Carrello</small>
                </div>
                <!-- Totale del carrello -->
                <div v-if="getCart().length !== 0" class="d-flex justify-content-between">
                    <strong>Totale:</strong>
                    <span>€{{ getTotalPrice() }}</span>
                </div>

                <!-- Pulsante per procedere al checkout -->
                <div v-if="getCart().length !== 0" class="mt-3">
                    <button class="btn btn-primary checkout w-100" type="button">Procedi al
                        Checkout</button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.offcanvas {
    z-index: 1020 !important;
    top: 5rem !important;
    background-color: #F46036 !important;
}

.checkout {
    font-weight: bold;
    background-color: #5B85AA;
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
    border: none;
}

.checkout:hover {
    background-color: #0f5ea3;
}

.btn-close {
    filter: invert(1);
    /* Cambia il colore della "X" a bianco */
}

.btn-close:hover {
    filter: invert(2);
    /* Colore leggermente grigio al passaggio del mouse */
}
</style>