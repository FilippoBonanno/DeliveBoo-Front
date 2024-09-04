<script>

export default {
    name: 'RestaurantCard',

    components: {

    },

    data() {
        return {

        }
    },

    props: {
        imageSrc: {
            type: String,
            required: true,
        },
        restaurantName: {
            type: String,
            required: true,
        },
        typologyName: {
            type: String,
            required: true,
        },
    },

    methods: {

    },

    mounted() {

    }
}
</script>

<template>
    <div class="card-container">
        <div class="image-container">
            <span class="typology-name"><!--{{ typologyName }} --> text</span>
            <img src="https://images.ctfassets.net/ihx0a8chifpc/JVN7uKOhy2mCHDoTg64ZR/faad2473a2d27e7be45393c5a1592a1a/assets.so-game-1280x720.png?w=1280&q=60&fm=webp"
                :alt="restaurantName" /> <!-- RICORDARSI DI DECOMMENTARE LE PROPS       :src="imageSrc"    -->
        </div>
        <p class="restaurant-name"><!--{{ restaurantName }} --> RISTORANTE</p>
    </div>
</template>

<style scoped>
.card-container {
    width: 250px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
}

.image-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.image-container img {
    width: 100%;
    display: block;
    border-radius: 12px;
}

.typology-name {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #000000c2;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
}

.restaurant-name {
    margin-top: 10px;
    font-weight: bold;
    font-size: 20px;
    font-family: "Permanent Marker";
    color: #000;
    text-align: start;
    margin-left: 1rem;
    letter-spacing: normal;
    word-spacing: 0px;
}

img {
    width: 100%;
    height: 100%;
}
</style>