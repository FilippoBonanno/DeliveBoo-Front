import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppSingleRestaurant from "./components/AppSingleRestaurant.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import TypologyCard from "./components/TypologyCard.vue";
import Payment from "./components/Payment.vue";
import Jumbotrone from "./components/Jumbotrone.vue";

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },



        {
            path: '/TypologyCard',
            name: 'TypologyCard',
            component: TypologyCard
        },

        {
            path: '/restaurant/:id',
            name: 'single-restaurant',
            component: AppSingleRestaurant
        },

        {
            path: '/RestaurantCard',
            name: 'RestaurantCard',
            component: RestaurantCard
        },

        {
            path: '/Checkout',
            name: 'Payment',
            component: Payment
        },

        {
            path: '/Jumbotrone',
            name: 'Jumbotrone',
            component: Jumbotrone
        },

    ]
});

export { router };