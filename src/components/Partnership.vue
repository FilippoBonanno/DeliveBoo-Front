<script>

import { store } from '../../data/storeCart.js';


export default {
    name: 'Partnership',

    components: {

        store
    },

    data() {
        return {

        }
    },

    methods: {

    },
    computed: {

    },

    mounted() {

    }
}
</script>

<template>
    <div class="wave position-relative">
        <img src="../assets/img/Partnership/wave.svg">
        <div class="together position-absolute d-flex">
            <img src="../assets/img/Partnership/together-opt.svg">
        </div>

    </div>

    <div class="fluid  join-us">
        <div class="container d-flex justify-content-center">
            <div class="row">
                <div class="col-12 ">
                    <div class="background__card d-flex flex-column align-items-center">
                        <div class="img_container col-3">
                            <img class="w-100"
                                src="https://glovoapp.com/images/corporate-container/partners-image-opt.png">
                        </div>
                        <h3 class="text-center mt-3 fw-bold">Diventa Partner</h3>
                        <div class="col-6 text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet inventore
                            enim quis error
                            et ipsa fugiat voluptates consequatur beatae, alias id provident odio dolor itaque, laborum
                            omnis accusamus consectetur architecto. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Similique quod nemo nobis voluptatum incidunt dicta.</div>
                        <button class=" custom-btn mt-5">Diventa Partner</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer class="footer">
        <div>
            <img class="waveFooter" src="../assets/img/Partnership/wave-black.svg">
        </div>
    </footer>

</template>

<style scoped>
.footer {

    color: white;
}

* {
    font-family: "Merriweather", serif;
}

.background__card {}

.together {

    top: 60%;
    left: 50%;
    transform: translate(-50%, -92%);
}

.together img {
    width: 150px;

}

.join-us {
    background-color: #5B85AA;
    padding-bottom: 7%;
}

.custom-btn {
    background-color: #00A082;
    /* Verde simile */
    color: white;
    border-radius: 50px;
    border: 1px;
    /* Per il bordo arrotondato */
    padding: 10px 20px;
}

.custom-btn:hover {
    background-color: #00c5a1;
}

.waveFooter {
    padding-top: -5%;
}
</style>