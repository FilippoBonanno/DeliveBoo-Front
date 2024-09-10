<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
};
</script>


<template>
  <div class="card-container d-flex flex-column align-items-start">
    <div class="image-container position-relative overflow-hidden rounded-3">
      <img :src="restaurant.img" alt="Immagine ristorante" class="img-fluid" />
      <div class="typology-name position-absolute bottom-0 start-0 bg-dark text-white p-2 rounded-2">
        <div v-for="category in restaurant.categories" class="text-start">
          {{ category.name }}
        </div>

      </div>
    </div>
    <div class="restaurant-name mt-2 fw-bold fs-5">
      {{ restaurant.name }}
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 250px;
  margin: 40px 20px;
}

.image-container {
  height: 150px;
}

.typology-name {
  bottom: 10px;
  left: 10px;
  font-size: 14px;
  font-weight: bold;
}

.restaurant-name {
  font-family: "Permanent Marker";
  color: #000;
  letter-spacing: normal;
  word-spacing: 0;
}
</style>
