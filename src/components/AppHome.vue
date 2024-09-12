<script>
import axios from 'axios'; // Import axios
import RestaurantCard from './RestaurantCard.vue'; // Importa RestaurantCard
import TypologyCard from './TypologyCard.vue'; // Altri componenti
import Skeleton from 'primevue/skeleton';
import Jumbotrone from './Jumbotrone.vue';
import Partnership from './Partnership.vue';

export default {
  name: 'AppHome',
  components: {
    TypologyCard,
    RestaurantCard,
    Skeleton,
    Jumbotrone,
    Partnership
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

    <!-- VISIBILE DA MD IN Sù -->
    <div class="container d-none d-md-block my-4">
      <h2 v-if="!isLoading">Ristoranti disponibili: {{ totalRestaurants }}</h2>
      <div class="row">
        <div class="col-12 d-flex justify-content-center flex-wrap">
          <div v-if="!isLoading && restaurants.length"
            class="d-flex flex-wrap justify-content-center justify-content-md-between ">
            <template v-for="restaurant in restaurants" :key="restaurant.id">
              <router-link class="btn" :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">
                <RestaurantCard :imageSrc="restaurant.img" :restaurantName="restaurant.name" :restaurant="restaurant" />
              </router-link>
            </template>
          </div>
          <div v-else-if="notFound">
            <h2 class="text-danger">La richiesta non ha prodotto alcun risultato</h2>
          </div>
          <div v-if="isLoading" class="d-flex justify-content-center flex-wrap">
            <div v-for="x in 8" :key="x" class="m-3">
              <Skeleton shape="square" size="15rem" class="ms-2"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VISIBILE SOLO DA MD IN GIù -->
    <div class="d-block d-md-none my-4">
      <h2 v-if="!isLoading">Ristoranti disponibili: {{ totalRestaurants }}</h2>
      <div class="row">
        <div class="col-12 d-flex justify-content-center flex-wrap">
          <div v-if="!isLoading && restaurants.length"
            class="d-flex flex-wrap justify-content-center justify-content-md-between ">
            <template v-for="restaurant in restaurants" :key="restaurant.id">
              <router-link class="btn w-100" :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">
                <RestaurantCard :imageSrc="restaurant.img" :restaurantName="restaurant.name" :restaurant="restaurant" />
              </router-link>
            </template>
          </div>
          <div v-else-if="notFound">
            <h2 class="text-danger">La richiesta non ha prodotto alcun risultato</h2>
          </div>
          <div v-if="isLoading" class="d-flex justify-content-center flex-wrap">
            <div v-for="x in 8" :key="x" class="m-3">
              <Skeleton shape="square" size="15rem" class="ms-2"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Partnership />
  </main>
</template>
<style scoped>
/* Padding e margini */
.container {
  padding: 1rem;
}

/* Titolo della pagina */
h2 {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Skeleton loader */
.skeleton {
  margin: 0.5rem;
}

/* Contenitore degli elementi del menu */
.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

/* Elemento del menu */
.menu-item {
  max-width: 300px;
  text-align: left;
  border-radius: 10px;
  background-color: #5B85AA;
  color: white;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Titolo dell'elemento del menu */
.menu-item h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* Descrizione dell'elemento del menu */
.menu-item p {
  font-size: 0.9rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

/* Immagine dell'elemento del menu */
.menu-item img {
  width: 100%;
  border-radius: 5px;
  margin-top: 0.5rem;
}

/* Prezzo */
.price {
  background-color: #000000c2;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
}

/* Bottone "Aggiungi al carrello" */
.btn-add-to-cart {
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
}

.btn-add-to-cart:hover {
  background-color: #ff3d2e;
}
</style>
