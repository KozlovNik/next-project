import { useRouter } from "next/router";
import useSWR from "swr";
import { GetProductDataTypes } from "../lib/dataFunctions";

export default function useCatalogData(
  initialData?: GetProductDataTypes,
  options = { revalidateOnMount: true }
) {
  const router = useRouter();
  const condition =
    router.pathname === "/search"
      ? `/search?text=${router.query.text || ""}`
      : `/api/products?category=${router.query.categorySlug || ""}`;
  const { data, mutate, error } = useSWR(condition, {
    fallback: initialData,
    revalidateOnFocus: false,
    revalidateOnMount: options.revalidateOnMount,
  });

  return { mutate, data, router, error };
}
