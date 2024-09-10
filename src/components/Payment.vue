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
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-6">
                    <h1 class="mb-4">Totale: {{ getTotalPrice() }}€</h1>
                    
                    <!-- Email Address -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Indirizzo Email<span class="text-danger">*</span></label>
                        <input type="email" class="form-control" id="email" required>
                    </div>

                    <!-- Full Name -->
                    <div class="mb-3">
                        <label for="name_on_card" class="form-label">Nome e Cognome<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="name_on_card" name="name_on_card" required>
                    </div>

                    <div class="row">
                        <!-- Address -->
                        <div class="col-md-6 mb-3">
                            <label for="address" class="form-label">Indirizzo<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="address" name="address" required>
                        </div>

                        <!-- City -->
                        <div class="col-md-3 mb-3">
                            <label for="city" class="form-label">Città<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="city" name="city" required>
                        </div>

                        <!-- Province -->
                        <div class="col-md-3 mb-3">
                            <label for="province" class="form-label">Provincia<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="province" name="province" required>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Postal Code -->
                        <div class="col-md-4 mb-3">
                            <label for="postalcode" class="form-label">Codice Postale<span class="text-danger">*</span></label>
                            <input type="number" class="form-control" id="postalcode" name="postalcode" required>
                        </div>

                        <!-- Country -->
                        <div class="col-md-4 mb-3">
                            <label for="country" class="form-label">Paese<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="country" name="country" required>
                        </div>

                        <!-- Phone -->
                        <div class="col-md-4 mb-3">
                            <label for="phone" class="form-label">Telefono</label>
                            <input type="text" class="form-control" id="phone" name="phone">
                        </div>
                    </div>

                    <!-- Payment Method Container -->
                    <div class="mb-3">
                        <div id="dropin-container"></div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-success w-100">Acquista ora</button>

                    <!-- Hidden Inputs -->
                    <input type="hidden" id="nonce" name="payment_method_nonce">
                    <input type="hidden" id="device" name="device_data">
                    <input type="hidden" id="amount" name="amount">
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>

#payment-form {
    margin-top: 5rem;
}


.btn-success {
    width: 100%;
}
</style>

