<script>
import TypologyCard from '../components/TypologyCard.vue';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard.vue';
import skeleton from 'primevue/skeleton';

export default {
    name: 'Jumbotrone',

    // emits: {
    //     selected,
    // },

    components: {
        TypologyCard,
        RestaurantCard,
        skeleton,
    },

    data() {
        return {
            currentClass: 'jumbotrone1', // Classe iniziale
            jumbotroneClasses: ['jumbotrone1', 'jumbotrone2', 'jumbotrone3'], // Array di classi
            currentClassIndex: 0, // Indice per il tracking della classe attuale
            intervalId: null, // ID del setInterval
            categories: '',
            categoriesSelected: [],
            restaurants: '',
            isLoading: true,
            notFound: false

        };
    },

    methods: {
        startCarousel() {
            this.intervalId = setInterval(() => {
                // Incrementa l'indice e lo cicla tra le classi
                this.currentClassIndex = (this.currentClassIndex + 1) % this.jumbotroneClasses.length;
                this.currentClass = this.jumbotroneClasses[this.currentClassIndex]; // Aggiorna la classe corrente
            }, 3000);
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
            this.$emit('arraySent', this.categoriesSelected)
        }
    },

    mounted() {
        // Avvia il carosello quando il componente è montato
        this.startCarousel();

        axios.get('http://localhost:8000/api/categories').then(response => {
            console.log(response);
            this.categories = response.data;
            console.log(this.categories)
            this.isLoading = false
        })
    },

    beforeDestroy() {
        // Cancella l'intervallo quando il componente viene distrutto
        clearInterval(this.intervalId);
    }
}
</script>

<template>
    <div class="TypologyContainer jumbotrone d-flex justify-content-center align-items-center" :class="currentClass">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="d-flex flex-wrap justify-content-center">
                    <!-- Skeleton loader for loading state -->
                    <div v-if="isLoading" class="d-flex p-2" v-for="item in 11" :key="item">
                        <skeleton height="2.5rem" width="7rem" class="mb-2" borderRadius="16px"></skeleton>
                    </div>

                    <!-- Category cards -->
                    <template v-else v-for="item in categories" :key="item.name">
                        <div class="d-flex flex-column align-items-center p-2">
                            <TypologyCard @selected="getCategory(item.name)" :name="item.name" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.jumbotrone {
    position: relative;
    border-bottom-left-radius: 8%;
    border-bottom-right-radius: 8%;
    margin-top: 5rem;
    width: 100%;
    height: 60vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0, 4, 255);
    overflow: hidden;
}

.jumbotrone::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    z-index: -1;
    transition: background-image 1s ease;
}

.jumbotrone1::before {
    background-image: url(../assets/img/Jumbotrone/backgrounJumbotrone_1.jpg);
}

.jumbotrone2::before {
    background-image: url(../assets/img/Jumbotrone/backgrounJumbotrone_2.jpg);
}

.jumbotrone3::before {
    background-image: url(../assets/img/Jumbotrone/backgrounJumbotrone_3.jpg);
}



.d-flex {
    display: flex;
}

.justify-content-center {
    justify-content: center;
}

.align-items-center {
    align-items: center;
}

.flex-wrap {
    flex-wrap: wrap;
}

.p-2 {
    padding: 0.5rem;
}
</style>

