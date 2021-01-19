import React from "react";

import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";

import styles from "../styles/Home.module.css";

const catalog = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbs}>
          <span className={styles.link}>Главная</span> •{" "}
          <span className={styles.link}>Каталог</span> •{" "}
          <span className={styles.active}>Молотый кофе</span>
        </div>
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
    </>
  );
};

export default catalog;
