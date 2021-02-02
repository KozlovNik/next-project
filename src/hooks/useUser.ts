import { useContext } from "react";
import useSWR from "swr";
import fetchJson from "../lib/fetchJson";
import { UserContext } from "../lib/userContext";

interface UserTypes {
  email: string;
  password: string;
}

export default function useUser() {
  const contextUser = useContext(UserContext);
  const { data: user, mutate, error } = useSWR("/api/user", {
    initialData: contextUser,
  });

  const logout = () => mutate(fetchJson("/api/logout", { method: "post" }));

  const login = (data: UserTypes) =>
    mutate(
      fetchJson("/api/login", {
        method: "post",
        body: JSON.stringify(data),
      })
    );

  return { user, logout, login, error };
}
