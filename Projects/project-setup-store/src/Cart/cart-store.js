import { subscribe } from "svelte/internal";
import { writable } from "svelte/store";

const cart = writable([
  {
    id: "p1",
    title: "Pencil",
    price: 2.99,
  },
  {
    id: "p2",
    title: "Pen",
    price: 9.99,
  },
]);

const customCart = {
  subscribe: cart.subscribe,
  addItem: (item) => {
    cart.update((items) => {
      if (items.find((i) => i.id === item.id)) {
        return [...items];
      }
      return [...items, item];
    });
  },
  removeItem: (id) => {
    cart.update((items) => {
      return items.filter((item) => item.id !== id);
    });
  },
};

export default customCart;
