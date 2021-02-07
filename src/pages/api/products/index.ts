import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prismaClient";

export const getProducts = async (page: string | string[] | number = 1) => {
  let queries = {};

  console.log(page);

  if (
    Array.isArray(page) ||
    !Number.isInteger(Number(page)) ||
    Number(page) < 1
  ) {
    return [];
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
  return products;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const products = await getProducts(page);
  res.json({ products });
};
