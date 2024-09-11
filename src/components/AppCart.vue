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
        handleGetCart() {
            // console.log(store.getCart(), 'cart');
            return store.getCart();
        },
        handleRemoveFromCart(itemid) {
            store.removeFromCart(itemid);
            // console.log(store.getCart(), 'cart');
        },
        handleClearCart() {
            // console.log(store.getCart(), 'cart');
            store.clearCart();
        },
        getTotalPrice() {
            let sum = 0;
            let cart = store.getCart()
            for (let i = 0; i < cart.length; i++) {
                //convertire il numero in stringa in numero decimale
                cart[i].price = parseFloat(cart[i].price);
                //moltiplico per la quantita'
                // console.log(cart[i].price, cart[i].quantity);
                let priceQuantity = cart[i].price * cart[i].quantity;
                sum += priceQuantity;
                // console.log(this.cart[i].price, sum);
            }
            return sum.toFixed(2);
        },
        handleUpdateQuantity(itemid, quantity) {
            store.updateQuantity(itemid, quantity);
        }

    },
    computed: {
        totalPrice() {
            return this.getTotalPrice(); // Chiamata alla funzione all'interno del computed
        }
    },

    mounted() {
        // console.log(store.getCart(), 'cart');
    }
}
</script>




<template>
    <!-- DATI CONTENENTI IL CARRELLO -->
    <div class="offcanvas bg-dark text-white offcanvas-end " data-bs-scroll="true" data-bs-backdrop="false"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 v-if="handleGetCart().length == 0" class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo
                Carrello
                e' Vuoto
            </h5>
            <h5 v-else class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div class="offcanvas-body">
                <!-- Placeholder prodotti nel carrello -->
                <ul class="list-group mb-3" v-if="handleGetCart().length !== 0">
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-for="item, i in handleGetCart()">
                        <div>
                            <div class="d-flex justify-content-between">
                                <h6 class="my-0">{{ item.name }} </h6>
                                <div class="d-flex align-items-center">
                                    <button @click="handleUpdateQuantity(item.id, item.quantity + 1)"
                                        class="btn btn-primary">+</button>
                                    <h6>x{{ item.quantity }}</h6>
                                    <button @click="handleUpdateQuantity(item.id, item.quantity - 1)"
                                        class="btn btn-primary">-</button>
                                </div>
                            </div>

                            <small class="text-muted">{{ item.description }}</small>
                            <div><button @click="handleRemoveFromCart(item.id)"
                                    class="text-muted mt-1 btn btn-danger">Elimina</button></div>
                        </div>
                        <span class="text-muted">€{{ parseFloat(item.price).toFixed(2) }}</span>
                    </li>
                </ul>
                <div v-if="handleGetCart().length !== 0">
                    <div @click="handleClearCart()"><small class="text-muted mt-1 btn btn-danger">Svuota
                            Carrello</small>
                    </div>
                    <!-- Totale del carrello -->
                    <div class="d-flex justify-content-between">
                        <strong>Totale:</strong>
                        <span>€{{ getTotalPrice() }}</span>
                    </div>

                    <!-- Pulsante per procedere al checkout -->
                    <div class="mt-3">
                        <router-link :to="{ name: 'Payment' }">
                            <button class="btn btn-primary checkout w-100" type="button">Procedi al
                                Pagamento
                            </button>
                        </router-link>

                    </div>
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