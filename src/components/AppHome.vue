<script>
import axios from 'axios';
import TypologyCard from './TypologyCard.vue';

export default {
    name: 'AppHome',

    components: {
        TypologyCard,
    },

    data() {
        return {
            restaurants: '',
        }
    },

    methods: {

    },

    mounted() {
        axios.get('http://localhost:8000/api/restaurants').then(response => {
            console.log(response);
            this.restaurants = response.data;

            console.log(this.restaurants)

        })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div>
                        <h1>Scegli cosa mangiare</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="d-flex flex-wrap">
                        <template v-for="item in restaurants">
                            <div>
                                <TypologyCard :typologyName="item.name" :imageSrc="item.img" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>