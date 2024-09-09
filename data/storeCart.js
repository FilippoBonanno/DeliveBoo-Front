// store.js
import { reactive } from "vue";

export const store = reactive({
  //Variabili
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  initialOwner: null,
  currentOwner: null,

  //Funzioni
  addToCart(product) {
    // this.currentOwner = product.restaurant;
    console.log(product.restaurant_id);
    // inizializzo il current owner
    this.currentOwner = product.restaurant_id;
    // verifico che l'initial owner sia diverso da null
    if (this.initialOwner === null) {
      this.initialOwner = product.restaurant_id;
      this.cart.push(product);
      // verifico che l'initial owner e' diverso dal current owner
    } else if (this.initialOwner !== product.restaurant_id) {
      this.cart = [];
      //resetto l'initial owner
      this.initialOwner = product.restaurant_id;
      this.cart.push(product);
      // se l'initial owner e' uguale al current owner aggiungo il prodotto al carrello
    } else {
      this.cart.push(product);
    }

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
