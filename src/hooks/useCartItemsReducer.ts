import { Product } from "@prisma/client";
import { useReducer } from "react";
import fetcher from "../lib/fetchJson";

interface CartItem {
  id: number;
  quantity: number;
  product: Product;
}

type Action =
  | { type: "add"; cartItem: CartItem }
  | { type: "update"; cartItem: CartItem }
  | { type: "remove"; itemId: number };

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "add":
      return [...state, action.cartItem];
    case "remove":
      return state.filter(({ id }) => id !== action.itemId);
    case "update":
      return state.map((item) =>
        item.id === action.cartItem.id ? action.cartItem : item
      );
    default:
      return state;
  }
}

export default function useCartItemsReducer(initialState: CartItem[]) {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = async (productId: number) => {
    const cartItem = await fetcher("/api/cartItems", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    dispatch({ type: "add", cartItem });
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      const cartItem = await fetcher(`/api/cartItems/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({ quantity }),
      });
      dispatch({ type: "update", cartItem });
    } catch {}
  };

  const deleteCartItem = async (itemId: number) => {
    try {
      await fetcher(`/api/cartItems/${itemId}`, { method: "DELETE" });
      dispatch({ type: "remove", itemId });
    } catch (err) {}
  };
  return { cartItems, handleAddToCart, deleteCartItem, updateQuantity };
}
