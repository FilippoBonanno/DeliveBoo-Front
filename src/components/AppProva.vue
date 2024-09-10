<script>
import axios from "axios";
export default {
    data() {
        return {

            types: [],
            isMobile: "",
        };
    },

    methods: {
        breakPoint() {
            this.isMobile = window.innerWidth < 576;
        },

        getTypeId(id) {
            // Ricavo gli id delle categorie selezionate dall'utente
            let typesResearch = this.store.typesResearch;
            let typeButton = document.getElementById(id);

            if (!typesResearch.includes(id)) {
                typesResearch.push(id);
                typeButton.classList.add("selected");
            } else {
                typesResearch.splice(typesResearch.indexOf(id), 1);
                typeButton.classList.remove("selected");
            }

            // chiamata Axios che restituirà i ristoranti che hanno le tipologie richieste dall'utente
            let typeParams = this.store.typesResearch.join(",");
            axios
                .get('http://localhost:8000/api/restaurants', {
                    params: {
                        type_id: typeParams,
                    },
                })
                .then((resp) => {
                    if (this.store.typesResearch.length == 0) {
                        axios.get('http://localhost:8000/api/restaurants').then((resp) => {
                            this.store.restaurantLoading = false;
                            this.store.restaurantsToShow = resp.data.results;
                            document.getElementById("homeTitle").textContent =
                                "I ristoranti intorno a te!";
                        });
                    } else {
                        this.store.restaurantsToShow = [];
                        if (resp.data.results) {
                            this.store.restaurantsToShow = resp.data.results;
                            document.getElementById("homeTitle").textContent =
                                "Risultati ricerca";
                        }
                    }
                });
        },
        openMenu() {
            let menu = document.querySelector(".tipology");
            menu.classList.toggle("active");
        },

        getImageUrl(imgName) {
            return new URL(`../assets/img/types-icon/${imgName}`, import.meta.url)
                .href;
        },

        showTypeText(indexText) {
            let typeText = document.getElementById(`typeText-${indexText}`);
            typeText.classList.add("d-block");
        },

        hideTypeText(indexText) {
            let typeText = document.getElementById(`typeText-${indexText}`);
            typeText.classList.remove("d-block");
        },
    },
    created() {
        axios.get(`http://127.0.0.1:8000/api/types`).then((resp) => {
            this.types = resp.data.results;
        });

        if (window.innerHeight < 576) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    },
    mounted() {
        this.breakPoint();
        window.addEventListener("resize", this.breakPoint);
    },
};
</script>

<template>
    <div class="ms_jumbotron h-100 d-flex align-items-end justify-content-center">
        <div class="container mt-auto my-sm-auto mx-auto">
            <!-- img di sfondo -->
            <div class="ms_background-overlay"></div>
            <h2 v-if="isMobile" class="text-center">Tipologie</h2>
            <!-- MENÙ -->
            <ul class="tipology m-0 p-0" id="type_menu">
                <div class="menuToggle" @click="openMenu()">
                    <i class="fa-solid fa-plus"></i>
                    <p id="titleMenu" class="fs-6">Tipologie</p>
                </div>

                <li v-for="(type, index) in types" :key="type.id" :style="`--i:${type.id}`" :id="type.id"
                    @click="getTypeId(type.id)">
                    <a class="text-decoration-none d-flex justify-content-center" href="#"
                        @mouseleave="hideTypeText(type.id)">
                        <img :id="`image-${type.id}`" class="type_image" @mouseover="showTypeText(type.id)"
                            :src="getImageUrl(type.icon)" :style="isMobile
                                ? {}
                                : { transform: 'rotate(' + (-360 / 12) * type.id + 'deg)' }
                                " alt="" />

                        <!-- :style="`transform: rotate(calc(-360deg / 12 * ${type.id}))`" -->
                        <p :id="`typeText-${type.id}`" class="m-0 ms-sm-3 mb-0 text-center" :style="isMobile
                            ? {}
                            : { transform: 'rotate(' + (-360 / 12) * type.id + 'deg)' }
                            ">
                            {{ type.name }}
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_jumbotron {
    min-height: 600px;
    position: relative;

    .ms_background-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url("../assets/img/jumbotron.jpeg");
        background-position: center;
        background-size: cover;
        filter: brightness(0.5);
        z-index: -1;
    }

    .ms_btn {
        background-color: $main-text;
        color: $bg-btn;
        width: 60%;

        &:hover {
            background-color: lighten($color: $bg-btn, $amount: 20%);
            color: $main-text;
        }
    }

    .selected {
        // background-color: lighten($color: $bg-btn, $amount: 20%);

        img {
            border: 3px solid $bg-btn;
            border-radius: 50%;
            padding: 0.2rem;
        }

        p {
            color: $bg-btn;
        }
    }
}

// MENÙ
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        color: $bg-btn;
    }

    @media screen and (min-width: 576px) {
        align-items: center;
    }

    .tipology {
        display: flex;
        align-items: center;
        overflow-x: scroll;
        scrollbar-color: red transparent;
        scrollbar-width: thin;
        // overflow-x: visible;

        @media screen and (min-width: 576px) {
            background-color: none;
            position: relative;
            justify-content: center;
            width: 90px;
            height: 300px;
            overflow: visible;
        }

        li {
            margin-right: 25px;
            list-style: none;
            transform-origin: 30px;

            @media screen and (min-width: 576px) {
                position: absolute;
                left: 15px;
                bottom: 100px;
                transition: 0.5s;
                transition-delay: calc(0.1s * var(--I));
                transform: none;
            }

            a {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 60px;
                font-size: 1.5rem;
                border-radius: 50%;
                color: white;

                @media screen and (min-width: 576px) {
                    transform: rotate(0deg) translateX(150px);
                    height: 60px;
                    flex-direction: row;
                }

                img {
                    display: block;

                    width: 50px;
                    height: 50px;

                    @media screen and (min-width: 576px) {
                        display: none;
                        width: 60px;
                    }
                }

                .transform {
                    transform: rotate(calc(-360deg / 12));
                }

                p {
                    display: block;
                    font-size: 15px;
                    margin-left: 0.2rem;

                    @media screen and (min-width: 576px) {
                        display: none;
                    }
                }
            }
        }

        .menuToggle {
            position: absolute;
            bottom: 100px;
            width: 60px;
            height: 60px;
            color: $bg-btn;
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1;
            border-radius: 50%;
            cursor: pointer;
            font-size: 2rem;
            transition: transform 1.5s;

            @media screen and (min-width: 576px) {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .tipology.active li {
        @media screen and (min-width: 576px) {
            transform: rotate(calc(360deg / 12 * var(--i)));
        }
    }

    .tipology.active img {
        display: block;
    }

    .tipology.active p {
        display: block;

        @media screen and (min-width: 576px) {
            display: none;
        }
    }

    .tipology.active .menuToggle {
        transform: rotate(315deg);
    }
}

@media screen and (max-width: 576px) {
    .ms_jumbotron {
        min-height: 450px;
        align-items: center !important;
    }
}
</style>