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
  productData: { products, ...rest },
  categories,
}) => {
  const router = useRouter();
  const categoriesList = [...categories, { name: "Акции", slug: "akcii" }];

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
          {products && products.length > 0 && <Pagination {...rest} />}
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
