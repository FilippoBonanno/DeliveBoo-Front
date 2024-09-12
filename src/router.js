import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppSingleRestaurant from "./components/AppSingleRestaurant.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import TypologyCard from "./components/TypologyCard.vue";
import Payment from "./components/Payment.vue";
import PaymentSuccess from "./components/PaymentSuccess.vue";
import PaymentDenied from "./components/PaymentDenied.vue";
import Jumbotrone from "./components/Jumbotrone.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

    {
      path: "/typologyCard",
      name: "TypologyCard",
      component: TypologyCard,
    },

    {
      path: "/restaurant/:slug",
      name: "single-restaurant",
      component: AppSingleRestaurant,
    },

    {
      path: "/restaurantCard",
      name: "RestaurantCard",
      component: RestaurantCard,
    },

    {
      path: "/checkout",
      name: "Payment",
      component: Payment,
    },

    {
      path: "/checkout/success",
      name: "PaymentSuccess",
      component: PaymentSuccess,
    },

    {
      path: "/checkout/denied",
      name: "PaymentDenied",
      component: PaymentDenied,
    },
    {
      path: "/jumbotrone",
      name: "Jumbotrone",
      component: Jumbotrone,
    },
  ],
});

export { router };
