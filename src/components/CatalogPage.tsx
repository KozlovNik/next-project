import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import Breadcrumbs from "./Breadcrumbs";
import Layout from "./Layout";

import { UserContextTypes } from "../lib/userContext";
import { getProductDataTypes, getCategoriesTypes } from "../lib/dataFunctions";
import { useRouter } from "next/router";

import styles from "./CatalogPage.module.css";

export interface CatalogPageProps {
  productData: getProductDataTypes;
  user?: UserContextTypes;
  categories: getCategoriesTypes;
}

const CatalogPage: React.FC<CatalogPageProps> = ({
  user,
  productData: { products, total },
  categories,
}) => {
  const router = useRouter();

  return (
    <Layout categories={categories} user={user}>
      <div className={styles.wrapper}>
        <Breadcrumbs
          category={
            categories.filter(
              (cat) => router.query.categorySlug === cat.slug
            )[0]
          }
        />
        <Sidebar categorySlug={router.query.categorySlug?.toString()} />
        <div className={styles.content}>
          <div className={styles.filters}>
            <ProductFilter label="Сортировака по:" />
            <ProductFilter label="Бренды" />
            <ProductFilter label="Страны" />
            <ProductFilter label="Цена" />
          </div>
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
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
