import { Product } from "@/types/product";
import { create } from "zustand";

export interface BasketItem {
  product: Product;
  count: number;
}

interface BasketStore {
  items: BasketItem[];
  setItesm: (items: BasketItem[]) => void;
  addToBasket: (product: Product) => void;
  removeFromBasket: (product: Product) => void;
  clearBasket: () => void;
}

export const useBasketStore = create<BasketStore>()((set) => ({
  items: [],
  addToBasket(product) {
    set((state) => {
      const exsitingIte = state.items.find(
        (item) => item.product.id === product.id
      );

      if (exsitingIte) {
        return {
          items: state.items.map((item) => {
            return item.product.id === product.id
              ? { ...item, count: item.count + 1 }
              : item;
          }),
        };
      }

      return { items: [...state.items, { product, count: 1 }] };
    });
  },
  removeFromBasket(product) {
    set((state) => {
      return {
        items: state.items.filter((item) => item.product.id !== product.id),
      };
    });
  },

  clearBasket() {
    set({ items: [] });
  },
  setItesm(items) {
    set({ items });
  },
}));
