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
    <div class="typology-card" @click="selected">
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