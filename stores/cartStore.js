import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity * item.price, 0),
  },

  actions: {
    loadCart() {
      if (process.client) {
        const data = localStorage.getItem("cart");
        this.items = data ? JSON.parse(data) : [];
      }
    },

    saveCart() {
      if (process.client) {
        localStorage.setItem("cart", JSON.stringify(this.items));
      }
    },

    addToCart(product) {
      const existing = this.items.find((item) => item.id === product.id);
      if (existing) existing.quantity++;
      else this.items.push({ ...product, quantity: 1 });
      this.saveCart();
    },

    removeFromCart(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveCart();
    },
    
    decreaseQuantity(productId) {
      const existingItem = this.items.find((item) => item.id === productId);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== productId);
      } else {
        existingItem.quantity -= 1;
      }

      this.saveCart();
    },
  },
});
