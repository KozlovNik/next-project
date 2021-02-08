import { createContext } from "react";

interface CategoryType {
  slug: string;
  name: string;
}

export type CategoriesContextType = CategoryType[];

export const CategoriesContext = createContext<CategoriesContextType>([]);
