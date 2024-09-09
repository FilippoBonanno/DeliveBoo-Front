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
    const indexToRemove = this.cart.findIndex((item) => item.id === productId);
    if (indexToRemove !== -1) {
      this.cart.splice(indexToRemove, 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      console.error(`Product with id ${productId} not found in the cart.`);
    }
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
