import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { router } from "./router";
// import accordion from "@primevue/themes/lara/accordion";

// const Noir = definePreset(Lara, {});

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        prefix: "p",
        darkModeSelector: "none",
        cssLayer: false,
      },
    },
    ripple: true,
    components: {
      //   accordion,
    },
  })
  .mount("#app");
