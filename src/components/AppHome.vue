<script>
import axios from 'axios'; // Import axios
import RestaurantCard from './RestaurantCard.vue'; // Importa RestaurantCard
import TypologyCard from './TypologyCard.vue'; // Altri componenti
import Skeleton from 'primevue/skeleton';
import Jumbotrone from './Jumbotrone.vue';

export default {
  name: 'AppHome',
  components: {
    TypologyCard,
    RestaurantCard,
    Skeleton,
    Jumbotrone
  },
  data() {
    return {
      categories: '',
      categoriesSelected: [],
      restaurants: [],
      isLoading: true,
      notFound: false,
      totalRestaurants: 0 // Numero totale di ristoranti
    };
  },
  methods: {
    async getRestaurants() {
      try {
        const response = await axios.get('http://localhost:8000/api/restaurants', {
          params: { categories: this.categoriesSelected }
        });
        this.restaurants = response.data.restaurants; // Aggiorna lista ristoranti
        this.totalRestaurants = response.data.total; // Numero totale di ristoranti
        this.isLoading = false;
        this.notFound = !response.data.restaurants.length; // Se non ci sono ristoranti, setta notFound
      } catch (error) {
        console.error('Errore nel caricamento dei ristoranti:', error);
      }
    },

    getSingleRestaurant(slug) {
      this.$router.push({ name: 'single-restaurant', params: { slug: slug } });
    },

    handleEmit(categoriesSelected) {
      this.categoriesSelected = categoriesSelected;
      this.getRestaurants();
    }
  },
  mounted() {
    axios.get('http://localhost:8000/api/categories').then(response => {
      this.categories = response.data;
      this.isLoading = false;
    });
    this.getRestaurants();
  }
};
</script>

<template>
    <main>
      <Jumbotrone @arraySent="handleEmit" />
      <div class="container">
        <h2 v-if="!isLoading">Ristoranti disponibili: {{ totalRestaurants }}</h2>
        <div class="row">
          <div class="col-12 d-flex justify-content-center flex-wrap">
            <div v-if="!isLoading && restaurants.length">
              <template v-for="restaurant in restaurants" :key="restaurant.id">
                <router-link class="btn" :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">
                  <RestaurantCard :imageSrc="restaurant.img" :restaurantName="restaurant.name" :restaurant="restaurant" />
                </router-link>
              </template>
            </div>
            <div v-else-if="notFound">
              <h2 class="text-danger">La richiesta non ha prodotto alcun risultato</h2>
            </div>
            <div v-if="isLoading" class="d-flex m-3">
              <Skeleton shape="square" size="15rem" class="ms-2" v-for="x in 8" :key="x"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  


<style scoped>
/* .p-inputtext {
    background-color: white !important;
    color: black !important;
}

.p-accordion {
    background-color: white !important;
    color: black !important;
} */

.TypologyContainer {
    margin-top: 5rem;

}

.typology-name {
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    margin-top: 5px;
    font-family: "Permanent Marker";

}

.typology-card.selected {
    transform: scale(1.1);
    /* Effetto zoom */
    box-shadow: 0 0 15px 5px rgba(32, 32, 32, 0.5);
    /* Effetto luce gialla sotto */
}
</style>