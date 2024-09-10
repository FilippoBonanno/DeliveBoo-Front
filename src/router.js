import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./components/AppHome.vue";
import AppSingleRestaurant from "./components/AppSingleRestaurant.vue";
import RestaurantCard from "./components/RestaurantCard.vue";
import TypologyCard from "./components/TypologyCard.vue";
import Payment from "./components/Payment.vue";
<<<<<<< HEAD
import PaymentSuccess from "./components/PaymentSuccess.vue";
import PaymentDenied from "./components/PaymentDenied.vue";
=======
import Jumbotrone from "./components/Jumbotrone.vue";
>>>>>>> jumbotrone

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },

<<<<<<< HEAD
    {
      path: "/prova",
      name: "prova",
      component: AppProva,
    },
=======

>>>>>>> jumbotrone

    {
      path: "/TypologyCard",
      name: "TypologyCard",
      component: TypologyCard,
    },

    {
      path: "/restaurant/:slug",
      name: "single-restaurant",
      component: AppSingleRestaurant,
    },

    {
      path: "/RestaurantCard",
      name: "RestaurantCard",
      component: RestaurantCard,
    },

    {
      path: "/Checkout",
      name: "Payment",
      component: Payment,
    },

<<<<<<< HEAD
    {
      path: "/Checkout/Success",
      name: "PaymentSuccess",
      component: PaymentSuccess,
    },

    {
      path: "/Checkout/Denied",
      name: "PaymentDenied",
      component: PaymentDenied,
    },
  ],
=======
        {
            path: '/Jumbotrone',
            name: 'Jumbotrone',
            component: Jumbotrone
        },

    ]
>>>>>>> jumbotrone
});

export { router };
