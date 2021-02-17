import { useState } from "react";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";
import { getQueryString } from "../lib/queries";
import {
  getBrandsTypes,
  getCountriesTypes,
  getProductDataTypes,
} from "../lib/dataFunctions";
import usePath from "../hooks/usePath";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ProductFilters from "./ProductFilters";

import styles from "./CatalogContent.module.css";
import { LoadingContext } from "../lib/loadingContext";

interface CatalogContentProps {
  productData: getProductDataTypes;
  countries: getCountriesTypes;
  brands: getBrandsTypes;
}

const CatalogContent: React.FC<CatalogContentProps> = ({
  productData,
  countries,
  brands,
}) => {
  const { mutate, data, router, error } = useCatalogData(productData);

  const [loading, setLoading] = useState(false);

  const { pathname } = usePath();

  const { categorySlug, page, ...restQueries } = router.query;

  const handlePageChange = async ({ selected }: { selected: number }) => {
    const queryString = getQueryString({
      page: (selected + 1).toString(),
      ...restQueries,
    });
    router.push(`${pathname}?${queryString}`, undefined, {
      shallow: true,
      scroll: true,
    });

    setLoading(true);
    await mutate(
      fetchJson(
        `/api/products?category=${categorySlug || ""}&${queryString}`,
        {}
      ),
      false
    );
    setLoading(false);
  };

  if (!data) {
    return null;
  }

  const { products, ...rest } = data;

  return (
    <div className={styles.content}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <Spinner show={loading && !error} />
        <ProductFilters countries={countries} brands={brands} />
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
      </LoadingContext.Provider>
    </div>
  );
};

export default CatalogContent;
