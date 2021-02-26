import { getFavoritesTypes } from "../lib/dataFunctions";
import { useReducer } from "react";
import fetcher from "../lib/fetchJson";

interface favorite {
  userId: number;
  productId: number;
  mark: string;
}

type Action =
  | { type: "update"; favorite: favorite }
  | { type: "remove"; productId: number };

function reducer(state: getFavoritesTypes, action: Action): getFavoritesTypes {
  switch (action.type) {
    case "remove":
      return state.filter(({ product }) => product.id !== action.productId);
    case "update":
      return state.map((i) =>
        i.product.id === action.favorite.productId
          ? { ...i, mark: action.favorite.mark }
          : i
      );
    default:
      return state;
  }
}

export default function useFavoritesReducer(initialState: getFavoritesTypes) {
  const [favoriteItems, dispatch] = useReducer(reducer, initialState);

  const updateFavorite = async (productId: number, mark: string) => {
    try {
      const favorite = await fetcher(`/api/favorites/${productId}`, {
        method: "PUT",
        body: JSON.stringify({ mark }),
      });
      dispatch({ type: "update", favorite });
    } catch {}
  };

  const deleteFavorite = async (productId: number) => {
    try {
      await fetcher(`/api/favorites/${productId}`, { method: "DELETE" });
      dispatch({ type: "remove", productId });
    } catch (err) {}
  };
  return { favoriteItems, deleteFavorite, updateFavorite };
}
