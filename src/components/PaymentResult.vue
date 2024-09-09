<script>
import axios from 'axios';

export default {
    name: 'PaymentResult',

    components: {

    },

    data() {
        return {
            result: null
        }
    },

    methods: {

    },

    mounted() {
        axios.post('http://localhost:8000/api/payment-result').then(response => {
            this.result = response;
        });
    }
}
</script>

<template>
    <div class="container my-m-top-5rem">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <h1>
                    ciao sei in payment result
                </h1>

                <pre>
                    {{ result }}
                </pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-m-top-5rem {
    margin-top: 5rem;
}
</style>