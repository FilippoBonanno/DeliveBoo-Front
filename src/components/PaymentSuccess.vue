<script>
import { store } from '../../data/storeCart.js';

export default {
    name: 'Denied',
    components: {
        store
    },

    data() {
        return {
        }
    },

    methods: {
        handleClearCart() {
            // console.log(store.getCart(), 'cart');
            store.clearCart();
        },
    },

    mounted() {
        this.handleClearCart();
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h1 class="text-center">
                    Grazie per aver acquistato da noi!
                </h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        margin-top:5rem;
    }
</style>
