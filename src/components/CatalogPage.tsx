import { UserContextTypes } from "../lib/userContext";
import { getProductDataTypes, getCategoriesTypes } from "../lib/dataFunctions";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";

import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import Breadcrumbs from "./Breadcrumbs";
import Layout from "./Layout";
import Spinner from "./Spinner";
import ProductFilters from "./ProductFilters";

import styles from "./CatalogPage.module.css";
import { getQueryString } from "../lib/queries";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);

  const { mutate, data, router, error, isValidating } = useCatalogData(
    productData
  );
  console.log("hello");

  const { categorySlug, page, ...restQueries } = router.query;

  const categoriesList = [...categories, { name: "Акции", slug: "akcii" }];

  const handlePageChange = async ({ selected }: { selected: number }) => {
    const queryString = getQueryString({
      page: (selected + 1).toString(),
      ...restQueries,
    });
    router.push(`/catalog/${categorySlug || ""}?${queryString}`, undefined, {
      shallow: true,
      scroll: true,
    });

    await mutate(
      fetchJson(
        `/api/products?category=${categorySlug || ""}&${queryString}`,
        {}
      ),
      false
    );
  };

  let productContent;
  if (data) {
    const { products, ...rest } = data;
    productContent = (
      <>
        <Spinner show={loading && !error} />
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
            categoriesList.filter((cat) => categorySlug === cat.slug)[0]
          }
        />
        <Sidebar />
        <div className={styles.content}>{productContent}</div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
