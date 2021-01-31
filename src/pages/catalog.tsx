import React from "react";

import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import Breadcrumbs from "../components/Breadcrumbs";
import Layout from "../components/Layout";

import styles from "../styles/Catalog.module.css";

const Catalog = () => {
  return (
    <Layout>
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
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductCard className={styles.product} key={i} />
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
