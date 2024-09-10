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
            isAnimating: false, // Stato che tiene traccia dell'animazione
        };
    },

    methods: {
        selected() {
            this.isChecked = !this.isChecked; // Cambia lo stato su ogni click
            this.isAnimating = true; // Avvia l'animazione
            this.$emit('selected');
        },
        animationEnd() {
            this.isAnimating = false; // Ferma l'animazione al termine
        }
    }
}
</script>

<template>
    <div @click="selected">
        <button type="button"
            :class="['btn', 'typology-btn', 'rounded-pill', { 'active': isChecked, 'animate__animated': isAnimating, 'animate__bounce': isAnimating }] "
            @animationend="animationEnd">
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
    color: #F46036;
}
</style>
