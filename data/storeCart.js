// store.js
import { reactive } from "vue";

export const store = reactive({
  //Variabili
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  //Funzioni
  addToCart(product) {
    this.cart.push(product);

    console.log(this.cart);

    localStorage.setItem("cart", JSON.stringify(this.cart));
  },
  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },
  clearCart() {
    this.cart = [];
    localStorage.setItem("cart", JSON.stringify(this.cart));
  },

  //Getter
  getCart() {
    return this.cart;
  },
});
