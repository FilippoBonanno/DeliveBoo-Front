<script>

export default {
    name: 'TypologyCard',

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

    },

    data() {
        return {
            isChecked: false,
        };
    },

    methods: {
        selected() {
            this.isChecked = !this.isChecked;
        },

    },

    mounted() {

    }
}
</script>

<!-- RICORDARE DI SOSTITUIRE GLI ESEMPI CON LE PROPS -->
<template>
    <div :class="['typology-card', { selected: isChecked }]" @click="selected">
        <div class="image-container">
            <img :src="imageSrc" :alt="typologyName" />
        </div>
        <div class="typology-name d-flex justify-content-center align-items-center flex-column">
            {{ typologyName }}
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" :checked="isChecked" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                </label>
            </div>
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
    width: 100%;
    height: auto;
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
    box-shadow: 0 0 15px 5px rgba(255, 193, 7, 0.5);
    /* Effetto luce gialla sotto */
}
</style>