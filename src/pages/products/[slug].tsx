import Breadcrumbs from "../../components/Breadcrumbs";
import Feedback from "../../components/Feedback";
import Starred from "../../components/Starred";
import Share from "../../components/Share";
import ProductCounter from "../../components/ProductCounter";
import Button from "../../components/Button";
import AboutProduct from "../../components/AboutProduct";
import Layout from "../../components/Layout";

import Error from "next/error";
import withSession from "../../lib/session";
import { prisma } from "../../lib/prismaClient";
import { Prisma } from "@prisma/client";

import styles from "../../styles/Product.module.css";

type ProductWithCategory = Prisma.ProductGetPayload<{
  include: { category: true };
}>;

interface ProductProps {
  product: ProductWithCategory;
  user?: {
    id: number;
    firstName: string;
    isLogged: boolean;
  };
}

const Product: React.FC<ProductProps> = ({ product, user }) => {
  if (!product) {
    return <Error statusCode={404} />;
  }
  const {
    name,
    slug,
    brand,
    price,
    material,
    roasting,
    ingredients,
    country,
    weight,
    about,
    category,
  } = product;
  return (
    <Layout value={user}>
      <Breadcrumbs category={category} product={{ name, slug }} />
      <div className="heading">{name}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={`/products/${slug}.jpg`} alt="" />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.icons}>
            <Feedback />
            <Starred />
            <Share />
          </div>
          <div className={styles.buyWrapper}>
            <div className={styles.price}>{price} руб.</div>
            <ProductCounter />
            <Button>Добавить</Button>
          </div>
          <div className={styles.chars}>
            <div className={styles.charWrapper}>
              Бренд: <span className={styles.char}>{brand}</span>
            </div>
            <div className={styles.charWrapper}>
              Материал упаковки: <span className={styles.char}>{material}</span>
            </div>
            {roasting && (
              <div className={styles.charWrapper}>
                Обжарка: <span className={styles.char}>{roasting}</span>
              </div>
            )}
            <div className={styles.charWrapper}>
              Состав: <span className={styles.char}>{ingredients}</span>
            </div>
            <div className={styles.charWrapper}>
              Страна: <span className={styles.char}>{country}</span>
            </div>
            <div className={styles.charWrapper}>
              Фасовка: <span className={styles.char}>{weight} г.</span>
            </div>
          </div>
        </div>
      </div>
      <AboutProduct info={about} />
    </Layout>
  );
};

export const getServerSideProps = withSession(async ({ req, query }) => {
  const product = await prisma.product.findUnique({
    where: {
      slug: query.slug,
    },
    include: {
      category: true,
    },
  });

  if (!product) {
    return { props: {} };
  }

  const user = req.session.get("user");

  return {
    props: { user: user ? user : null, product },
  };
});

export default Product;
