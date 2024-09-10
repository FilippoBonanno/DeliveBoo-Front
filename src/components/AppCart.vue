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
    <div class="offcanvas bg-dark text-white offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 v-if="handleGetCart().length === 0" class="offcanvas-title fs-3" id="offcanvasScrollingLabel">Il tuo Carrello è Vuoto</h5>
            <h5 v-else class="offcanvas-title fs-3" id="offcanvasScrollingLabel">Il tuo Carrello</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group mb-3" v-if="handleGetCart().length !== 0">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in handleGetCart()" :key="item.id">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="my-0">{{ item.name }}</h6>
                            <div class="d-flex align-items-center">
                                <button @click="handleUpdateQuantity(item.id, item.quantity + 1)" class="btn btn-primary btn-sm">+</button>
                                <h6 class="mx-2">x{{ item.quantity }}</h6>
                                <button @click="handleUpdateQuantity(item.id, item.quantity - 1)" class="btn btn-primary btn-sm">-</button>
                            </div>
                        </div>
                        <small class="text-muted">{{ item.description }}</small>
                        <button @click="handleRemoveFromCart(item.id)" class="text-muted mt-1 btn btn-danger btn-sm">Elimina</button>
                    </div>
                    <span class="text-muted">€{{ parseFloat(item.price).toFixed(2) }}</span>
                </li>
            </ul>
            <div v-if="handleGetCart().length !== 0">
                <button @click="handleClearCart()" class="btn btn-danger btn-sm w-100">Svuota Carrello</button>
                <!-- Totale del carrello -->
                <div class="d-flex justify-content-between mt-3">
                    <strong>Totale:</strong>
                    <span>€{{ getTotalPrice() }}</span>
                </div>
                <!-- Pulsante per procedere al checkout -->
                <div class="mt-3">
                    <a href="http://localhost:5174/Checkout">
                        <button class="btn btn-primary w-100">Procedi al Checkout</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.offcanvas {
    z-index: 1020 !important;
    top: 0; /* Modificato per farlo adattare meglio su schermi piccoli */
    width: 300px; 
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
    filter: invert(0.7);
    /* Colore leggermente grigio al passaggio del mouse */
}

/* Rendere i pulsanti più piccoli sui dispositivi mobili */
.btn-sm {
    font-size: 0.875rem; /* Riduce la dimensione del testo */
    padding: 0.25rem 0.5rem; /* Riduce il padding */
}

.w-100 {
    width: 100% !important; /* Assicura che i pulsanti occupino tutta la larghezza */
}
</style>
