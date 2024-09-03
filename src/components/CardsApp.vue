<script>

export default {
    name: 'CardsApp',

    components: {

    },

    props: {
        typologyName: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        isSelected: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {

        }
    },

    methods: {
        toggleSelection() {
            this.$emit('toggle-selection', this.restaurantName);
        },
    },

    mounted() {

    }
}
</script>

<!-- RICORDARE DI SOSTITUIRE GLI ESEMPI CON LE PROPS -->
<template>
    <div :class="['typology-card', { selected: isSelected }]" @click="toggleSelection">
        <div class="image-container">
            <img :src="imageSrc" :alt="typologyName" />
        </div>
        <div class="typology-name">
            {{ typologyName }}
        </div>
    </div>
</template>

<style scoped>
.typology-card {
    width: 180px;
    text-align: center;
    font-family: Arial, sans-serif;
    margin: 20px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.typology-card.selected {
    border-color: #ff0707;
    /* Colore di bordo per la card selezionata */
    background-color: #fef7e0;
    /* Colore di sfondo per la card selezionata */
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
    width: 90%;
    height: auto;
    border-radius: 10px;
}

.typology-name {
    background-color: #ffc107;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    margin-top: -10px;
}
</style>