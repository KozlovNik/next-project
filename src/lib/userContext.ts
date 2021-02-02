import { createContext } from "react";

export interface UserContextTypes {
  id: number;
  firstName: string;
  isLogged: boolean;
}

export const UserContext = createContext<Partial<UserContextTypes>>({});
