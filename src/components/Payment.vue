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
            store: store,
            email: '',
            address: '',
            postalcode: '',
            phone: '',
            alfanumerici: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            errori: false,
            submitTry: false,
            storeCart: store.getCart()
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
        },
        checkOnSubmit(event) {

            // Reset errori
            this.errori = false;

            // Provato a fare il submit
            this.submitTry = true;

            // Validazione email
            if (!this.emailValidator(this.email)) {
                this.errori = true;
            }

            // Validazione indirizzo
            if (!this.addressValidator(this.address)) {
                this.errori = true;
            }

            // Validazione telefono
            if (!this.phoneValidator(this.phone)) {
                this.errori = true;
            }

            // Se ci sono errori allora previeni l'invio del form
            if (this.errori) {
                event.preventDefault();
                return false;
            }

            return true;
        },
        emailValidator(email) {

            // Controlla se contiene il . e la @
            if (!email.includes("@") || !email.includes(".")) {
                this.errori = true;
                return false;
            }
            // Controlla che ci sia un solo "@" e che sia in una posizione valida
            const atIndex = email.indexOf('@');
            if (atIndex === -1 || atIndex !== email.lastIndexOf('@')) {
                this.errori = true;
                return false
            }
            // Controlla che ci sia un punto dopo "@" e che non sia l'ultimo carattere
            const dotIndex = email.indexOf(".", atIndex);
            if (dotIndex === -1 || dotIndex === email.length - 1) {
                this.errori = true;
                return false;
            }
            // Controlla che il primo e l'ultimo carattere siano alfanumerici
            if (!this.alfanumerici.includes(email[0]) || !this.alfanumerici.includes(email[email.length - 1])) {
                this.errori = true;
                return false
            }
            // Controlla che non ci siano spazi bianchi
            if (email.includes(' ')) {
                this.errori = true;
                return false
            }
            // Controlla che non ci siano ".." o ".@" o "@."
            if (email.includes("..") || email.includes(".@") || email.includes("@.")) {
                this.errori = true;
                return false;
            }
            // Se tutti i controlli passano, l'email è valida
            return true

        },
        addressValidator(address) {

            address = address.trim();
            // Controlla se l'indirizzo è vuoto
            if (address.length === 0) {
                this.errori = true;
                return false;
            }

            // Controlla la lunghezza minima dell'indirizzo
            if (address.length < 10) {
                this.errori = true;
                return false;
            }

            // Controlla la presenza di numeri nell'indirizzo
            const hasNumber = /\d/.test(address);
            if (!hasNumber) {
                this.errori = true;
                return false;
            }

            // Se tutte le validazioni passano
            return true;
        },
        phoneValidator(phone){
            let ammessi = "1234567890+-"
            let analisi = phone.trim();
            if(analisi.length>18){
                return false;
            }
            for(let i = 0; i<analisi.length; i++){
                if(!ammessi.includes(analisi[i])){
                    return false;
                }
            };
            return true;
        },
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

                                // Total price
                                document.getElementById('total_price').value = this.getTotalPrice();

                                // Id Ristorante
                                document.getElementById('restaurant_id').value = store.restaurantId;

                                // Piatti
                                document.getElementById('plates').value = JSON.stringify(this.storeCart);

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
            <div class="row justify-content-center mb-5">
                <div class="col-md-8 col-lg-6">
                    <h5 class="my-3"><strong>{{ store.initialOwner }}</strong></h5>
                    <div class="card border-0 ">
                        <div class="card-body pt-0">
                            <div class="row  justify-content-between" v-for="element in store.getCart()">
                                <div class="col-auto col-md-7">
                                    <div class="media flex-column flex-sm-row">
                                        <img class=" img-fluid dishImg" :src="element.img" width="62" height="62" >
                                        <div class="media-body  my-auto">
                                            <div class="row ">
                                                <div class="col-auto">
                                                    <p class="mb-0"><b>{{element.name}}</b></p>
                                                    <small class="text-muted d-block text-truncate">{{ element.description }}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" pl-0 flex-sm-col col-auto  my-auto">
                                    <p class="boxed-1">{{element.quantity}}</p>
                                </div>
                                <div class=" pl-0 flex-sm-col col-auto  my-auto ">
                                    <p><b>€{{ parseFloat(element.price).toFixed(2) }}</b></p>
                                </div>
                            </div>
                            <hr class="my-2">
                            <div class="row ">
                                <div class="col">
                                    <div class="row justify-content-between">
                                        <div class="col-4">
                                            <p><b>Totale</b></p>
                                        </div>
                                        <div class="flex-sm-col col-auto">
                                            <p class="mb-1"><b>€{{ getTotalPrice() }}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Full Name -->
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome e Cognome<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>

                    <!-- Email Address -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Indirizzo Email<span class="text-danger">*</span></label>
                        <input type="email" class="form-control" id="email" name="email" required v-model="email">
                        <div class="errorClientMessage text-danger" role="alert"
                            v-show="!emailValidator(email) && submitTry">
                            Email non valida esempio: esempio@esempio.com
                        </div>
                    </div>

                    <div class="row">
                        <!-- Address -->
                        <div class="col-md-6 mb-3">
                            <label for="address" class="form-label">Indirizzo<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="address" name="address" required
                                v-model="address">
                            <div class="errorClientMessage text-danger" role="alert"
                                v-show="!addressValidator(address) && submitTry">
                                L'indirizzo non è valido!
                            </div>
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
                            <label for="postalcode" class="form-label">Codice Postale<span
                                    class="text-danger">*</span></label>
                            <input type="number" class="form-control" id="postalcode" name="postalcode" required
                                v-model="postalcode">
                        </div>

                        <!-- Country -->
                        <div class="col-md-4 mb-3">
                            <label for="country" class="form-label">Paese<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="country" name="country" required>
                        </div>

                        <!-- Phone -->
                        <div class="col-md-4 mb-3">
                            <label for="phone" class="form-label">Telefono<span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="phone" name="phone" required v-model="phone">
                            <div class="errorClientMessage text-danger" role="alert"
                                v-show="!phoneValidator(phone) && submitTry">
                                Il numero di telefono inserito non è valido!
                            </div>
                        </div>
                    </div>

                    <!-- Payment Method Container -->
                    <div class="mb-3">
                        <div id="dropin-container"></div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-success w-100 mt-3" @click="checkOnSubmit">Acquista ora</button>

                    <!-- Hidden Inputs -->
                    <input type="hidden" id="nonce" name="payment_method_nonce">
                    <input type="hidden" id="device" name="device_data">
                    <input type="hidden" id="total_price" name="total_price">
                    <input type="hidden" id="restaurant_id" name="restaurant_id">
                    <input type="hidden" id="plates" name="plates">
                </div>
            </div>
        </div>
    </form>
</template>

<style scoped>
#payment-form {
    margin-top: 5rem;
}

.dishImg{
    aspect-ratio: 1;

}
.btn-success {
    width: 100%;
}
</style>
