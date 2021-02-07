import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/Layout";

import withSession from "../lib/session";
import { getProducts } from "./api/products";
import { Prisma } from "@prisma/client";

import styles from "../styles/Catalog.module.css";

type ProductProps = Prisma.PromiseReturnType<typeof getProducts>;

interface CatalogProps {
  products: ProductProps;
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

const Catalog: React.FC<CatalogProps> = ({ user, products }) => {
  return (
    <Layout value={user}>
      <div className={styles.wrapper}>
        <Breadcrumbs />
        <Sidebar />
        <div className={styles.content}>
          <div className={styles.filters}>
            <ProductFilter label="Сортировака по:" />
            <ProductFilter label="Бренды" />
            <ProductFilter label="Страны" />
            <ProductFilter label="Цена" />
          </div>
          <div className={styles.products}>
            {products.map(({ slug, ...rest }) => (
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

export default Catalog;

export const getServerSideProps = withSession(async ({ req }) => {
  const user = req.session.get("user");

  const products = await getProducts();
  console.log(products);

  return {
    props: { products, user: user ? user : null },
  };
});
