import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  category?: { name: string; slug: string };
  product?: { name: string; slug: string };
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, product }) => {
  const router = useRouter();

  let categories;
  if (category && router.pathname === "/catalog/[categorySlug]") {
    categories = <span className={styles.active}> • {category.name} </span>;
  } else if (category) {
    categories = (
      <>
        <span> • </span>
        <Link href={`/catalog/${category.slug}`}>
          <a className={styles.link}>{category.name}</a>
        </Link>
      </>
    );
  } else {
    categories = null;
  }

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <a className={styles.link}> Главная </a>
      </Link>
      {router.pathname === "/catalog" ? (
        <span className={styles.active}> • Каталог </span>
      ) : (
        <>
          <span> • </span>
          <Link href="/catalog">
            <a className={styles.link}>Каталог</a>
          </Link>
        </>
      )}

      {categories}

      {product && <span className={styles.active}> • {product.name}</span>}
    </div>
  );
};

export default Breadcrumbs;
