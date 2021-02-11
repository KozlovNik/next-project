import { useState } from "react";
import { UserContextTypes } from "../lib/userContext";
import { getProductDataTypes, getCategoriesTypes } from "../lib/dataFunctions";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetchJson from "../lib/fetchJson";

import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import Breadcrumbs from "./Breadcrumbs";
import Layout from "./Layout";
import Spinner from "./Spinner";
import ProductFilters from "./ProductFilters";

import styles from "./CatalogPage.module.css";

export interface CatalogPageProps {
  productData: getProductDataTypes;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
}

const CatalogPage: React.FC<CatalogPageProps> = ({
  user,
  productData,
  categories,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const categoriesList = [...categories, { name: "Акции", slug: "akcii" }];
  const { data, mutate } = useSWR(
    `/api/products?category=${router.query.categorySlug || ""}`,
    {
      initialData: { ...productData },
      revalidateOnFocus: false,
      revalidateOnMount: false,
    }
  );

  const handlePageChange = async ({ selected }: { selected: number }) => {
    router.push(
      `/catalog/${router.query.categorySlug || ""}?page=${selected + 1}`,
      undefined,
      { shallow: true, scroll: true }
    );

    setLoading(true);
    await mutate(
      fetchJson(
        `/api/products?category=${router.query.categorySlug || ""}&page=${
          selected + 1
        }`,
        {}
      ),
      false
    );
    setTimeout(() => setLoading(false), 500);
  };

  let productContent;
  if (data) {
    const { products, ...rest } = data;
    productContent = (
      <>
        {loading && <Spinner />}
        <ProductFilters />
        <div className={styles.products}>
          {products &&
            products.map(({ slug, ...rest }) => (
              <ProductCard
                className={styles.product}
                key={slug}
                slug={slug}
                {...rest}
              />
            ))}
        </div>
        {products && products.length > 0 && (
          <Pagination {...rest} handlePageChange={handlePageChange} />
        )}
      </>
    );
  }

  return (
    <Layout categories={categories} user={user}>
      <div className={styles.wrapper}>
        <Breadcrumbs
          category={
            categoriesList.filter(
              (cat) => router.query.categorySlug === cat.slug
            )[0]
          }
        />
        <Sidebar categorySlug={router.query.categorySlug?.toString()} />
        <div className={styles.content}>{productContent}</div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
