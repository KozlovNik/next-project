import { Prisma } from "@prisma/client";
import { prisma } from "./prismaClient";

interface getProductDataType {
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
}: getProductDataType = {}) => {
  if (
    Array.isArray(page) ||
    !Number.isInteger(Number(page)) ||
    Number(page) < 1
  ) {
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
        mode: "insensitive"
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
      brand: true,
      country: true,
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

export type getCategoriesTypes = Prisma.PromiseReturnType<typeof getCategories>;
export type getBrandsTypes = Prisma.PromiseReturnType<typeof getBrands>;
export type getCountriesTypes = Prisma.PromiseReturnType<typeof getCountries>;
export type getProductDataTypes = Prisma.PromiseReturnType<
  typeof getProductData
>;
