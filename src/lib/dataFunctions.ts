import { Prisma } from "@prisma/client";
import { prisma } from "./prismaClient";

interface getProductDataType {
  page?: any;
  category?: string;
}

export const getProductData = async ({
  page,
  category,
}: getProductDataType = {}) => {
  if (
    Array.isArray(page) ||
    !Number.isInteger(Number(page)) ||
    Number(page) < 1
  ) {
    page = 1;
  }

  let queries: Prisma.ProductFindManyArgs = {
    select: {
      id: true,
      name: true,
      slug: true,
      price: true,
      category: true,
    },
    skip: (page - 1) * 2,
    take: 2,
  };

  let where;
  if (category) {
    where = {
      category: {
        slug: category,
      },
    };
    queries = {
      ...queries,
      where,
    };
  }

  const products = await prisma.product.findMany({
    ...queries,
  });
  const total = await prisma.product.count({ where });
  prisma.$disconnect();
  const count = products.length;
  const pageCount = Math.ceil(total / 2);
  const currentPage: number = page;
  return { products, total, count, pageCount, currentPage };
};

export const getUser = (req: any) => {
  const user = req.session.get("user");
  return user ? user : null;
};

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    select: {
      name: true,
      slug: true,
    },
  });
  prisma.$disconnect();
  return categories;
};

export const getProduct = async (slug: string) => {
  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });

  prisma.$disconnect();

  if (!product) {
    return null;
  }

  return product;
};

export type getCategoriesTypes = Prisma.PromiseReturnType<typeof getCategories>;
export type getProductDataTypes = Prisma.PromiseReturnType<
  typeof getProductData
>;
