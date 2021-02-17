import { useRouter } from "next/router";

export default function usePath() {
  const { asPath } = useRouter();

  return { pathname: asPath.split("?")[0].toString() };
}
