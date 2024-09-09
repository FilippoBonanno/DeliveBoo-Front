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
            <h5 class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo Carrello
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div class="offcanvas-body">
                <!-- Placeholder prodotti nel carrello -->
                <ul class="list-group mb-3" v-if="getCart() !== []">
                    <li class="list-group-item d-flex justify-content-between align-items-center"
                        v-for="item, i in getCart()">
                        <div>
                            <h6 class="my-0">{{ item.name }}</h6>
                            <small class="text-muted">Descrizione breve</small>
                            <div @click="handleRemoveFromCart(item.id)"><small
                                    class="text-muted mt-1 btn btn-danger">Elimina</small></div>
                        </div>
                        <span class="text-muted">€{{ item.price }}</span>
                    </li>
                </ul>
                <div @click="handleClearCart()"><small class="text-muted mt-1 btn btn-danger">Elimina</small>
                </div>
                <!-- Totale del carrello -->
                <div class="d-flex justify-content-between">
                    <strong>Totale:</strong>
                    <span>€32.50</span>
                </div>

                <!-- Pulsante per procedere al checkout -->
                <div class="mt-3">
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