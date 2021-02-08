import { Prisma } from "@prisma/client";
import { prisma } from "./prismaClient";

export const getProductData = async (page: any = 1) => {
  let queries = {};

  if (
    Array.isArray(page) ||
    !Number.isInteger(Number(page)) ||
    Number(page) < 1
  ) {
    return {};
  } else {
    queries = {
      skip: Number(page) - 1,
      take: 1,
    };
  }
  const products = await prisma.product.findMany({
    ...queries,
    select: {
      id: true,
      name: true,
      slug: true,
      price: true,
      category: true,
    },
  });
  const total = await prisma.product.count();

  return { products, total };
};

export const getUser = (req: any) => {
  const user = req.session.get("user");
  return user ? user : null;
};

export const getCategories = async () => {
  return await prisma.category.findMany({
    select: {
      name: true,
      slug: true,
    },
  });
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

  if (!product) {
    return null;
  }

  return product;
};

export type getCategoriesTypes = Prisma.PromiseReturnType<typeof getCategories>;
export type getProductDataTypes = Prisma.PromiseReturnType<
  typeof getProductData
>;
