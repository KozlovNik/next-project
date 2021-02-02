import { createContext } from "react";

interface CategoryType {
  slug: string;
  name: string;
}

export type CategoriesContextType = CategoryType[] | null;

export const CategoriesContext = createContext<CategoriesContextType>([]);
