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
            categories: '',
            categoriesSelected: [],
            valueToRemove: '',
        }
    },

    methods: {
        getRestaurants() {
            axios.get('http://localhost:8000/api/restaurants', { params: { categories: this.categoriesSelected } }).then((response)=> {
                console.log(response)
            })
        },

        getCategory(name) {

            if (this.categoriesSelected.includes(name)) {
                let x = this.categoriesSelected.indexOf(name)
                this.categoriesSelected.splice(x, 1)
                console.log(this.categoriesSelected);
            } else {
                console.log("cliccato", name)
                this.categoriesSelected.push(name)
                console.log(this.categoriesSelected)
            }
        }
    },

    mounted() {
        axios.get('http://localhost:8000/api/categories').then(response => {
            console.log(response);
            this.categories = response.data;

            console.log(this.categories)

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
                    <div class="d-flex flex-wrap justify-content-center">
                        <template v-for="item in categories">
                            <div>
                                <TypologyCard @click="getCategory(item.name)" :typologyName="item.name" />
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <button @click="getRestaurants()" class="btn btn-primary">Invia</button>
                </div>
            </div>
        </div>

    </main>
</template>

<style scoped></style>