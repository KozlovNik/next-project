import { getProductDataTypes } from "../lib/dataFunctions";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function useCatalogData(initialData?: getProductDataTypes) {
  const router = useRouter();
  const { data, mutate, error } = useSWR(
    `/api/products?category=${router.query.categorySlug || ""}`,
    {
      initialData,
      revalidateOnFocus: false,
      revalidateOnMount: false,
    }
  );

  return { mutate, data, router, error };
}
