import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { cartId } = req.cookies;
    const { productId } = JSON.parse(req.body);

    try {
      const cartItem = await prisma.cartItem.create({
        data: {
          cartId: Number(cartId),
          productId: Number(productId),
        },
        select: { quantity: true, product: true },
      });
      prisma.$disconnect();
      return res.status(201).json(cartItem);
    } catch {
      return res.status(404).json({ message: "Not found" });
    }
  }
  return res.status(400).json({ message: "Not found" });
};
