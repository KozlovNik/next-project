import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
};
