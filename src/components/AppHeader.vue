<script>

export default {
    name: 'AppHeader',

    components: {
       
    },

    data() {
        return {

        }
    },

    methods: {
        getImg(path) {
            let risultato = new URL("../assets/img/" + path, import.meta.url);
            return risultato.href;
        }
    },

    mounted() {
        
    }
}
</script>

<template>
    <header class="orange mb-5">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 h-100 d-flex justify-content-between align-items-center">
                    <div class="img-container">
                        <img src="../assets/img/deliveboologo.png" alt="">
                    </div>
                    <div class="d-flex">
                        <div class="me-2">
                            <router-link :to="{ name: 'home' }">home</router-link>
                        </div>
                        <div class="me-2">
                            <router-link :to="{ name: 'prova' }">prova</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.orange {
    background-color: orange;
}

a {
    text-decoration: none;
    color: black;
}

header {
    height: 5rem;
}

.h-100 {
    height: 100%;
}

.img-container {
    height: 5rem;
}

img {
    height: 100%;
}
</style>