import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  category?: { name: string; slug: string };
  product?: { name: string; slug: string };
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ category, product }) => {
  const router = useRouter();

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

      {category && router.pathname === "/catalog/[slug]" && (
        <span className={styles.active}> • {category.name} </span>
      )}
      {category && router.pathname !== "/catalog/[slug]" && (
        <>
          <span> • </span>
          <Link href={`/category/${category.slug}`}>
            <a className={styles.link}>{category.name}</a>
          </Link>
        </>
      )}

      {product && <span className={styles.active}> • {product.name}</span>}
    </div>
  );
};

export default Breadcrumbs;
