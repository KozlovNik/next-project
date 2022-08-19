import { Product } from "@prisma/client";
import { useReducer } from "react";
import fetcher from "../lib/fetchJson";

interface CartItem {
  quantity: number;
  product: Product;
  id: number;
}

type Action =
  | { type: "add"; cartItem: CartItem }
  | { type: "update"; cartItem: CartItem }
  | { type: "remove"; productId: number };

function reducer(state: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case "add":
      return [...state, action.cartItem];
    case "remove":
      return state.filter(({ product }) => product.id !== action.productId);
    case "update":
      return state.map((item) =>
        item.product.id === action.cartItem.product.id ? action.cartItem : item
      );
    default:
      return state;
  }
}

export default function useCartItemsReducer(initialState: CartItem[]) {
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  const handleAddToCart = async (productId: number) => {
    const cartItem = await fetcher<CartItem>("/api/cartItems", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    dispatch({ type: "add", cartItem });
  };

  const updateQuantity = async (itemId: number, quantity: number) => {
    try {
      const cartItem = await fetcher<CartItem>(`/api/cartItems/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({ quantity }),
      });
      dispatch({ type: "update", cartItem });
    } catch {
      // noop
    }
  };

  const deleteCartItem = async (productId: number) => {
    try {
      await fetcher(`/api/cartItems/${productId}`, { method: "DELETE" });
      dispatch({ type: "remove", productId });
    } catch (err) {
      // noop
    }
  };

  return { cartItems, handleAddToCart, deleteCartItem, updateQuantity };
}
