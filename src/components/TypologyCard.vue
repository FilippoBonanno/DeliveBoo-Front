<script>

export default {
    name: 'TypologyCard',

    components: {

    },

    props: {
        name: {
            type: String,
            required: true,
        }
    },
    emits: ['selected'],

    data() {
        return {
            isChecked: false,
        };
    },

    methods: {
        selected() {
            this.isChecked = !this.isChecked;
            this.$emit('selected');
        },

    },

    mounted() {

    }
}
</script>

<!-- RICORDARE DI SOSTITUIRE GLI ESEMPI CON LE PROPS -->
<template>

    <div class="image-container " :class="['typology-card', { selected: isChecked }]" @click="selected">
        <img
            src="https://static.vecteezy.com/system/resources/previews/029/139/918/original/delicious-food-restaurant-food-top-view-food-with-transparent-background-ai-generative-free-png.png" />
    </div>
    <div class="typology-name ">
        {{ name }}
    </div>

</template>

<style scoped>
.typology-card {
    width: 180px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 20px;
    cursor: pointer;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.image-container {
    width: 100px;
    height: 100px;
    background-color: #f9f2e6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
}

.image-container img {
    width: 135%;
    height: auto;
    overflow: unset;
    border-radius: 10px;

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

    border: 5px solid yellowgreen;
}
</style>