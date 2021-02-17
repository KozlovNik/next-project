import { getProductDataTypes } from "../lib/dataFunctions";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function useCatalogData(
  initialData?: getProductDataTypes,
  options = { revalidateOnMount: true }
) {
  const router = useRouter();
  let condition =
    router.pathname === "/search"
      ? `/search?text=${router.query.text || ""}`
      : `/api/products?category=${router.query.categorySlug || ""}`;
  const { data, mutate, error } = useSWR(condition, {
    initialData,
    revalidateOnFocus: false,
    revalidateOnMount: options.revalidateOnMount,
  });

  return { mutate, data, router, error };
}
