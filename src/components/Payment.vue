<script>
import axios from 'axios';
export default {
    name: 'AppSingleRestaurant',
    components: {
    },
    data() {
        return {
            token: null,
            dropinInstance: null,
        }
    },
    methods: {
    }
    ,
    mounted() {
        axios.get('http://localhost:8000/api/token').then(response => {
            
            this.token = response.data;

            if (this.token && this.token.token) {

                braintree.dropin.create({
                    container: '#dropin-container',
                    authorization: this.token.token,
                    dataCollector:true
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

        <div id="dropin-container" class="w-50 m-auto"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
        <input name="device_data" type="hidden" id="device">
    </form>

</template>

<style scoped></style>
