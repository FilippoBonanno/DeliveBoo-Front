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
                <div class="col-12 h-100 d-flex justify-content-between align-items-center ">
                    <div class="h-100 d-flex align-items-center animate__animated animate__lightSpeedInLeft">
                        <img src="../assets/img/Deliveboo-logo-Byke.png">
                        <h1 class="title-logo ms-3 mb-0">DeliveBoo</h1>
                    </div>
                    <div class="d-flex">
                        <div class="me-3 btn custom-btn">
                            <router-link :to="{ name: 'home' }"><i class="fa-solid fa-house"></i> Home</router-link>
                        </div>

                        <div class=" cart-btn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span class="badge badge-cart">3 </span>
                            <!-- SOSTITUIRE CON N PRODOTTI -->
                        </div>

                        <!-- DATI CONTENENTI IL CARRELLO -->
                        <div class="offcanvas bg-dark text-white offcanvas-end " data-bs-scroll="true"
                            data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling"
                            aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title fs-2" id="offcanvasScrollingLabel">Il tuo Carrello
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">

                                <div class="offcanvas-body">
                                    <!-- Placeholder prodotti nel carrello -->
                                    <ul class="list-group mb-3">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="my-0">Prodotto 1</h6>
                                                <small class="text-muted">Descrizione breve</small>
                                            </div>
                                            <span class="text-muted">€10.00</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="my-0">Prodotto 2</h6>
                                                <small class="text-muted">Descrizione breve</small>
                                            </div>
                                            <span class="text-muted">€15.00</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 class="my-0">Prodotto 3</h6>
                                                <small class="text-muted">Descrizione breve</small>
                                            </div>
                                            <span class="text-muted">€7.50</span>
                                        </li>
                                    </ul>

                                    <!-- Totale del carrello -->
                                    <div class="d-flex justify-content-between">
                                        <strong>Totale:</strong>
                                        <span>€32.50</span>
                                    </div>

                                    <!-- Pulsante per procedere al checkout -->
                                    <div class="mt-3">
                                        <button class="btn btn-primary checkout w-100" type="button">Procedi al
                                            Checkout</button>
                                    </div>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
a {
    text-decoration: none;
    color: white;
    font-weight: bold;

}

header {
    height: 5rem;
    width: 100%;
    background-color: #F46036;
    position: fixed;
    top: 0;
    z-index: 1050;
}

.title-logo {
    font-family: "Merriweather", serif;
    font-weight: 900;
    font-style: italic;
    color: #5B85AA;
}

.offcanvas {
    z-index: 1020 !important;
    top: 5rem !important;
    background-color: #F46036 !important;
}


.h-100 {
    height: 100%;
}

.checkout {
    font-weight: bold;
    background-color: #5B85AA;
    color: white;
    border-radius: 50px;
    padding: 10px 20px;
    border: none;
}

.checkout:hover {
    background-color: #0f5ea3;
}

img {
    height: 100%;
}

.custom-btn {
    background-color: #5B85AA;
    /* Verde simile */
    color: white;
    border-radius: 50px;
    /* Per il bordo arrotondato */
    padding: 10px 20px;
}

.custom-btn:hover {
    background-color: #0f5ea3;
}

.cart-btn {
    position: relative;
    color: white;
    background-color: #5B85AA;
    border-radius: 50px;
    padding: 10px 20px;
}

.cart-btn:hover {
    background-color: #0f5ea3;
}

.badge-cart {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    border-radius: 50%;
    padding: 5px 10px;
    font-size: 12px;
}

.btn-close {
    filter: invert(1);
    /* Cambia il colore della "X" a bianco */
}

.btn-close:hover {
    filter: invert(2);
    /* Colore leggermente grigio al passaggio del mouse */
}
</style>