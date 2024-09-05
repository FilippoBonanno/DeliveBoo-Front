<script>
import axios from 'axios';

export default {
    name: 'AppSingleRestaurant',

    components: {

    },

    data() {
        return {
            restaurant: '',
        }
    },

    methods: {

    },

    mounted() {
        axios.get('http://localhost:8000/api/restaurants/' + this.$route.params.id).then((response) => {
            console.log(response);
            this.restaurant = response.data;
            console.log(this.restaurant);
        });
    }
}
</script>

<template>

    <div class="menu-section">
        <div class="title-section d-flex flex-column">
            <h1>{{ this.restaurant.name }}</h1>
            <h2>Menù</h2>
        </div>
        <div class="menu-items">
            <div class="menu-item" v-for="dish in this.restaurant.dishes">
                <h3>{{ dish.name }}</h3>
                <p>{{ dish.description }}</p>
                <span class="price">{{ dish.price }} €</span> 
                <img :src="dish.img" :alt="dish.name" />
            </div>
        </div>
        
    </div>




</template>

<style scoped>
.menu-section {
    text-align: center;
    padding: 50px 0;
    background-color: #f8f8f8;
}

.title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}


h2 {
    font-family: "Times New Roman", Times, serif;
    font-size: 24px;
    font-weight: bold;
}

.menu-items {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
}

.menu-item {
    max-width: 300px;
    text-align: left;
}

.menu-item h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.menu-item p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
}

.menu-item img {
    width: 100%;
    border-radius: 5px;
}

.price {
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
}

</style>