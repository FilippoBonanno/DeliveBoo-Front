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
      <img :src="restaurant.img" alt="Immagine ristorante" class="w-100 h-100 object-fit-cover" />
      <div class="typology-name position-absolute bottom-0 start-0  text-white p-2 rounded-2 ">
        <div v-for="category in restaurant.categories" class="text-start mt-1">
          {{ category.name }}
        </div>

      </div>
    </div>
    <div class="restaurant-name mt-3 text-start">
      <h5 class="m-0 fw-bolder">{{ restaurant.name }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  width: 250px;

  font-family: "Merriweather", serif;
}

.image-container {
  width: 250px;
  height: 150px;

}

.typology-name {
  width: 120px;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
  background-color: #00000046;
}

@media (max-width: 767.98px) {
  .image-container {
    height: 250px;
    width: 100%;
  }

  .card-container {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
