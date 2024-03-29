import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "./cookies";
import { prisma } from "./prismaClient";

interface GetProductDataType {
  page?: any;
  category?: string;
  price?: string;
  brand?: string;
  country?: string;
  minPrice?: string;
  maxPrice?: string;
  text?: string;
}

export const getProductData = async ({
  page,
  category,
  price,
  brand,
  country,
  minPrice,
  maxPrice,
  text,
}: GetProductDataType = {}) => {
  if (!Number.isInteger(Number(page)) || Number(page) < 1) {
    // eslint-disable-next-line no-param-reassign
    page = 1;
  }

  let order: "asc" | "desc" | undefined;
  if (price === "asc" || price === "desc") {
    order = price;
  }

  let queries: Prisma.ProductFindManyArgs = {
    select: {
      id: true,
      name: true,
      slug: true,
      price: true,
      category: true,
      feedback: { select: { rating: true } },
    },
    skip: (page - 1) * 12,
    take: 12,
    orderBy: {
      price: order,
    },
  };

  let where = {};
  if (text) {
    where = {
      name: {
        contains: text,
        mode: "insensitive",
      },
    };
  }

  if (category) {
    where = {
      category: {
        slug: category,
      },
    };
  }

  if (brand) {
    where = {
      ...where,
      brand: {
        name: {
          in: brand.split(","),
        },
      },
    };
  }

  if (country) {
    where = {
      ...where,
      country: {
        name: {
          in: country.split(","),
        },
      },
    };
  }

  let priceQuery = {};

  if (Number.isInteger(Number(minPrice))) {
    priceQuery = { gt: Number(minPrice) };
  }

  if (Number.isInteger(Number(maxPrice))) {
    priceQuery = { ...priceQuery, lt: Number(maxPrice) };
  }

  where = { ...where, price: priceQuery };

  queries = {
    ...queries,
    where,
  };

  const products = await prisma.product.findMany({
    ...queries,
  });

  const total = await prisma.product.count({ where });

  prisma.$disconnect();
  const count = products.length;
  const pageCount = Math.ceil(total / 12);
  const currentPage: number = page;
  return { products, total, count, pageCount, currentPage };
};

export const getUser = (req: any) => {
  const user = req.session.get("user");
  return user || null;
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
      brand: true,
      country: true,
      feedback: {
        select: {
          comment: true,
          rating: true,
          user: { select: { firstName: true, lastName: true, id: true } },
          dateCreated: true,
        },
      },
    },
  });

  prisma.$disconnect();

  if (!product) {
    return null;
  }

  return product;
};

export const getCountries = async () => {
  const countries = await prisma.country.findMany({ select: { name: true } });
  prisma.$disconnect();

  return countries;
};

export const getBrands = async () => {
  const brands = await prisma.brand.findMany({ select: { name: true } });
  prisma.$disconnect();

  return brands;
};

export const getCart = async ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  const { cartId } = req.cookies;
  let cart;
  const select = {
    id: true,
    cartItems: { select: { quantity: true, product: true } },
  };
  if (cartId) {
    cart = await prisma.cart.findUnique({
      select,
      where: { id: Number(cartId) },
    });
  } else {
    cart = await prisma.cart.create({
      select,
      data: {},
    });
    prisma.$disconnect();
    setCookie(res, "cartId", cart.id.toString(), {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: true,
      httpOnly: true,
      path: "/",
    });
  }
  return cart;
};

export const getFavorites = async (userId: number) => {
  const favorites = await prisma.favorite.findMany({
    where: { userId },
    select: {
      mark: true,
      product: { select: { id: true, name: true, slug: true, price: true } },
    },
  });
  prisma.$disconnect();
  return favorites;
};

export const getFavoritesIds = (arr: any) =>
  arr?.map(({ product }: any) => product.id) || [];

export type GetCategoriesTypes = Prisma.PromiseReturnType<typeof getCategories>;
export type GetCartTypes = Prisma.PromiseReturnType<typeof getCart>;
export type GetBrandsTypes = Prisma.PromiseReturnType<typeof getBrands>;
export type GetCountriesTypes = Prisma.PromiseReturnType<typeof getCountries>;
export type GetProductDataTypes = Prisma.PromiseReturnType<
  typeof getProductData
>;
export type GetProductTypes = Prisma.PromiseReturnType<typeof getProduct>;
export type GetFavoritesTypes = Prisma.PromiseReturnType<typeof getFavorites>;
