import { Product } from "@prisma/client";
import { useState } from "react";
import qs from "qs";
import { LoadingContext } from "../lib/loadingContext";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";
import {
  GetBrandsTypes,
  GetCountriesTypes,
  GetProductDataTypes,
} from "../lib/dataFunctions";
import usePath from "../hooks/usePath";

import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ProductFilters from "./ProductFilters";

import styles from "./CatalogContent.module.css";

interface CatalogContentProps {
  productData: GetProductDataTypes;
  countries: GetCountriesTypes;
  brands: GetBrandsTypes;
  cartItems: {
    quantity: number;
    product: Product;
  }[];
  handleAddToCart: (id: number) => void;
  handleToggleStarred: (id: number) => void;
  favoritesIds: number[];
}

const CatalogContent: React.FC<CatalogContentProps> = ({
  productData,
  countries,
  brands,
  cartItems,
  handleAddToCart,
  favoritesIds,
  handleToggleStarred,
}) => {
  const { mutate, data, router, error } = useCatalogData(productData);

  const [loading, setLoading] = useState(false);

  const { pathname } = usePath();

  const { categorySlug, page, ...restQueries } = router.query;

  const handlePageChange = async ({ selected }: { selected: number }) => {
    const queryString = qs.stringify({
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
            products.map(({ slug, id, ...otherProps }) => (
              <ProductCard
                handleToggleStarred={handleToggleStarred}
                className={styles.product}
                key={slug}
                id={id}
                inCart={cartItems?.some((e) => e.product.id === id) ?? false}
                handleAddToCart={handleAddToCart}
                slug={slug}
                favoritesIds={favoritesIds}
                {...otherProps}
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
