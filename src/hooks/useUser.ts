import useSWR from "swr";
import fetchJson from "../lib/fetchJson";

interface UserTypes {
  email: string;
  password: string;
}

export default function useUser() {
  const { data: user, mutate, error } = useSWR("/api/user");

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
