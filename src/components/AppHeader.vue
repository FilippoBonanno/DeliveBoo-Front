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

    },

    mounted() {

    }
}
</script>

<template>
    <header class="orange">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <div>
                        DeliveBoo
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
</style>