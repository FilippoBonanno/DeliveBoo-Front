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
                            <img class="w-100 "
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

    <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s"
                            style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                            <h3 class="f-title f_600 t_color f_size_18">Collegati con noi</h3>
                            <p>Non perderti nessuna novità.!</p>
                            <form action="#" class="f_subscribe_two mailchimp" method="post" novalidate="true"
                                _lpchecked="1">
                                <input type="text" name="EMAIL" class="form-control memail" placeholder="Email">
                                <button class="btn btn_get btn_get_two" type="submit">Contattaci</button>
                                <p class="mchimp-errmessage" style="display: none;"></p>
                                <p class="mchimp-sucmessage" style="display: none;"></p>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s"
                            style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                            <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href="#">Azienda</a></li>
                                <li><a href="#">Android App</a></li>
                                <li><a href="#">ios App</a></li>
                                <li><a href="#">Desktop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s"
                            style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                            <h3 class="f-title f_600 t_color f_size_18">Aiuto</h3>
                            <ul class="list-unstyled f_list">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Termini &amp; Condizioni</a></li>
                                <li><a href="#">Documentazione</a></li>
                                <li><a href="#">Supporto e Politica</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s"
                            style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;">
                            <h3 class="f-title f_600 t_color f_size_18">Team Sviluppo</h3>
                            <div class="f_social_icon ">
                                <a href="https://github.com/FilippoBonanno" target="_blank"><img style="width: 100%;"
                                        src="../assets/img/Git_png/pngwing.com.png" alt="">F</a>
                                <a href="https://github.com/MatteoZattini" target="_blank"><img style="width: 100%;"
                                        src="../assets/img/Git_png/pngwing.com-blue.png" alt="">Ma</a>
                                <a href="https://github.com/EdoardoMenicucci" target="_blank"><img style="width: 100%;"
                                        src="../assets/img/Git_png/pngwing.com-red.png" alt="">E</a>
                                <a href="https://github.com/Mikee282828" target="_blank"><img style="width: 100%;"
                                        src="../assets/img/Git_png/pngwing.com-yellow.png" alt="">Me</a>
                                <a href="https://github.com/damirusso95 " target="_blank"><img style="width: 100%;"
                                        src="../assets/img/Git_png/pngwing.com-blue.png" alt="">D</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer_bg">
                <div class="footer_bg_one"></div>
                <div class="footer_bg_two"></div>
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-7">
                        <p class="mb-0 f_400">© Deliveboo.</p>
                    </div>
                    <div class="col-lg-6 col-sm-5 text-right">
                        <p>Creato e sviluppato da: Filippo , Matteo ,
                            Edoardo , Michele e Damiano</p>
                    </div>
                </div>
            </div>
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
    margin-top: -5%;
}

/* FOOTER */



.new_footer_area {
    background: #fbfbfd;
}


.new_footer_top {
    padding: 120px 0px 270px;
    position: relative;
    overflow-x: hidden;
}

.new_footer_area .footer_bottom {
    padding-top: 5px;
    padding-bottom: 50px;
}

.footer_bottom {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #7f88a6;
    padding: 27px 0px;
}

.new_footer_top .company_widget p {
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: #6a7695;
    margin-bottom: 20px;
}

.new_footer_top .company_widget .f_subscribe_two .btn_get {
    border-width: 1px;
    margin-top: 20px;
}

.btn_get_two:hover {
    background: transparent;
    color: #0F5EA3;
}

.btn_get:hover {
    color: #fff;
    background: #0F5EA3;
    border-color: #0F5EA3;
    -webkit-box-shadow: none;
    box-shadow: none;
}

footer a:hover,
footer a:focus,
footer .btn:hover,
footer .btn:focus,
footer button:hover,
footer button:focus {
    text-decoration: none;
    outline: none;
}



.new_footer_top .f_widget.about-widget .f_list li a:hover {
    color: #0F5EA3;
}

.new_footer_top .f_widget.about-widget .f_list li {
    margin-bottom: 11px;
}

.f_widget.about-widget .f_list li:last-child {
    margin-bottom: 0px;
}

.f_widget.about-widget .f_list li {
    margin-bottom: 15px;
}

.f_widget.about-widget .f_list {
    margin-bottom: 0px;
}

.new_footer_top .f_social_icon a {
    width: 44px;
    height: 44px;
    line-height: 43px;
    background: transparent;
    border: 1px solid #e2e2eb;
    font-size: 24px;
}

.f_social_icon a {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    color: #858da8;
    display: inline-block;
    background: #ebeef5;
    text-align: center;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
}

.ti-facebook:before {
    content: "\e741";
}

.ti-twitter-alt:before {
    content: "\e74b";
}

.ti-vimeo-alt:before {
    content: "\e74a";
}

.ti-pinterest:before {
    content: "\e731";
}

.btn_get_two {
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #5B85AA;
    border-color: #5B85AA;
    color: #fff;
}

.btn_get_two:hover {
    background: transparent;
    color: #0F5EA3;
}

.new_footer_top .f_social_icon a:hover {
    background: #0F5EA3;
    border-color: #0F5EA3;
    color: #0F5EA3;
}

.new_footer_top .f_social_icon a+a {
    margin-left: 4px;
}

.new_footer_top .f-title {
    margin-bottom: 30px;
    color: #0F5EA3;
}

.f_600 {
    font-weight: 600;
}

.f_size_18 {
    font-size: 18px;
}

footer h1,
footer h2,
footer h3,
footer h4,
footer h5,
footer h6 {
    color: #4b505e;
}

.new_footer_top .f_widget.about-widget .f_list li a {
    color: #6a7695;
}


.new_footer_top .footer_bg {
    position: absolute;
    bottom: 0;
    background: url("../assets/img/Partnership/footer_bg.png") no-repeat scroll center 0;
    width: 100%;
    height: 266px;
}

.new_footer_top .footer_bg .footer_bg_one {
    background: url("../assets/img/Deliveboo-logo-Byke.png") no-repeat center center;
    width: 155px;
    height: 105px;
    background-size: 100%;
    position: absolute;
    bottom: 0;
    left: 30%;
    -webkit-animation: myfirst 22s linear infinite;
    animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
    background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center;
    width: 88px;
    height: 100px;
    background-size: 100%;
    bottom: 0;
    left: 38%;
    position: absolute;
    -webkit-animation: myfirst 30s linear infinite;
    animation: myfirst 30s linear infinite;
}



@-moz-keyframes myfirst {
    0% {
        left: -25%;
    }

    100% {
        left: 100%;
    }
}

@-webkit-keyframes myfirst {
    0% {
        left: -25%;
    }

    100% {
        left: 100%;
    }
}

@keyframes myfirst {
    0% {
        left: -25%;
    }

    100% {
        left: 100%;
    }
}
</style>