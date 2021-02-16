import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  category?: { name: string; slug: string };
  product?: { name: string; slug: string };
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, product }) => {
  const { pathname } = useRouter();

  let catalog = null;
  if (category && pathname === "/catalog/[categorySlug]") {
    catalog = <span className={styles.active}> • {category.name} </span>;
  } else if (category) {
    catalog = (
      <>
        <span> • </span>
        <Link href={`/catalog/${category.slug}`}>
          <a className={styles.link}>{category.name}</a>
        </Link>
      </>
    );
  }

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <a className={styles.link}> Главная </a>
      </Link>
      {pathname === "/catalog" ? (
        <span className={styles.active}> • Каталог </span>
      ) : (
        <>
          <span> • </span>
          <Link href="/catalog">
            <a className={styles.link}>Каталог</a>
          </Link>
        </>
      )}

      {catalog}

      {product && <span className={styles.active}> • {product.name}</span>}
    </div>
  );
};

export default Breadcrumbs;
