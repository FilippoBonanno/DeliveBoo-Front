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
            nonceValue: null,
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
                },
                    (error, dropinInstance) => {
                        if (error) {
                            console.error(error);
                            return;
                        }

                        this.$refs.form.addEventListener('submit', (event) => {
                            event.preventDefault();

                            dropinInstance.requestPaymentMethod((error, payload) => {
                                if (error) {
                                    console.error(error);
                                    return;
                                }

                                document.getElementById('nonce').value = payload.nonce; //non usare il binding perché braintree ha un ciclo di vita esterno a vue

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

        <div id="dropin-container"></div>
        <input type="submit" />
        <input type="hidden" id="nonce" name="payment_method_nonce" />
    </form>

</template>

<style scoped></style>
