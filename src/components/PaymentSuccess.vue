<script>
import { store } from '../../data/storeCart.js';

export default {
    name: 'Denied',
    components: {
        store
    },

    data() {
        return {
            timer: '',
            time: 5,
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
        this.timer = setInterval(() => {
            if (this.time > 1) {
                this.time-=1;
            } else {
                clearInterval(this.timer);
                this.$router.push({ path: '/' });
            }
        }, 1000);
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h1 class="text-center">
                    Grazie per aver acquistato da noi!
                    <h3 class="text-center text-secondary">
                        Verrai reindirizzato alla home fra {{ time }} secondi.
                    </h3>
                </h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 5rem;
}
</style>
