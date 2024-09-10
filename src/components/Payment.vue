<script>
import { store } from '../../data/storeCart.js'
import axios from 'axios';
export default {
    name: 'AppSingleRestaurant',
    components: {
        store
    },
    data() {
        return {
            token: null,
            dropinInstance: null,
            store: store
        }
    },
    methods: {
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
        }
    }
    ,
    mounted() {
        axios.get('http://localhost:8000/api/token').then(response => {

            this.token = response.data;

            if (this.token && this.token.token) {

                braintree.dropin.create({
                    container: '#dropin-container',
                    authorization: this.token.token,
                    dataCollector: true,
                    locale: 'it_IT'
                },
                    (error, dropinInstance) => {
                        if (error) {
                            console.error(error);
                            return;
                        }

                        // Al submit del form...
                        this.$refs.form.addEventListener('submit', (event) => {
                            // Previeni il submit se ci sono errori
                            event.preventDefault();

                            // Richiedi il metodo di pagamento
                            dropinInstance.requestPaymentMethod((error, payload) => {
                                // Interrompi se ci sono errori
                                if (error) {
                                    console.error(error);
                                    return;
                                }
                                // Device Data
                                document.getElementById('device').value = payload.deviceData; //non usare il binding perché braintree ha un ciclo di vita esterno a vue

                                // Nonce
                                document.getElementById('nonce').value = payload.nonce;

                                document.getElementById('amount').value = this.getTotalPrice();

                                // Form submit
                                this.$refs.form.submit();
                            });
                        });
                    }

                );
            }
        });
    }
}
</script>

<template>

    <form id="payment-form" action="http://localhost:8000/api/checkout" method="post" ref="form">
        <div class="container">
            <div class="col-md-6 offset-md-3">
                <h1>
                    Totale: {{ getTotalPrice() }}€
                </h1>
                <div class="form-group">
                    <label for="email">Indirizzo Email<span class="text-danger">*</span></label>
                    <input type="email" class="form-control" id="email">
                </div>

                <div class="form-group">
                    <label for="name">Nome e Cognome<span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="name" name="name">
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="address">Indirizzo<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="address" name="address">
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="city">Città<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="city" name="city">
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="form-group">
                            <label for="province">Provincia<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="province" name="province">
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="postalcode">Codice Postale<span class="text-danger">*</span></label>
                            <input type="number" class="form-control" id="postalcode" name="postalcode">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="country">Paese<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="country" name="country">
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="phone">Telefono</label>
                            <input type="text" class="form-control" id="phone" name="phone">
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="form-group">
                            <div id="dropin-container"></div>
                        </div>
                    </div>

                </div>

                <button type="submit" class="btn btn-success">Acquista ora</button>

                <input type="hidden" id="nonce" name="payment_method_nonce" />
                <input name="device_data" type="hidden" id="device">
                <input name="amount" type="hidden" id="amount">

            </div>
        </div>
    </form>

</template>

<style scoped>
#payment-form {
    margin-top: 5rem;
}
</style>
