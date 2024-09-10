<script>
export default {
    name: 'TypologyCard',

    props: {
        name: {
            type: String,
            required: true,
        }
    },

    emits: ['selected'],

    data() {
        return {
            isChecked: false, // Stato che tiene traccia del click
        };
    },

    methods: {
        selected() {
            this.isChecked = !this.isChecked; // Cambia lo stato su ogni click
            this.$emit('selected');
        },
    }
}
</script>

<template>
    <div @click="selected">
        <!-- Applica la classe 'active' se isChecked è true -->
        <button type="button" :class="['btn', 'typology-btn', 'rounded-pill', { 'active': isChecked }]">
            {{ name }}
        </button>
    </div>
</template>

<style scoped>
.typology-btn {
    background-color: #5B85AA;
    color: white;
    font-family: "Merriweather", serif;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.typology-btn:hover {
    background-color: #0f5ea3;
    color: #F46036;
}

/* Stile che viene applicato quando isChecked è true */
.active {
    background-color: #0f5ea3;
    /* Colore di sfondo quando è attivo */
    color: #F46036;
    /* Colore del testo quando è attivo */

}
</style>
