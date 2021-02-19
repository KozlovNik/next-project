import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { cartId } = req.cookies;
    const { productId } = JSON.parse(req.body);

    let cart;
    try {
      cart = await prisma.cart.findUnique({
        where: { id: Number(cartId) },
        select: { cartItems: { select: { productId: true } } },
      });
      if (!cart) {
        throw new Error();
      }
    } catch {
      return res.status(404).json({ message: "Not found" });
    }

    const productIds = cart.cartItems.map(({ productId }) => productId);

    if (productIds.includes(Number(productId))) {
      return res.status(409).json({ message: "Already exists" });
    }

    try {
      const cartItem = await prisma.cartItem.create({
        data: {
          cartId: Number(cartId),
          productId: Number(productId),
          quantity: 1,
        },
        select: { id: true, quantity: true, product: true },
      });
      return res.status(201).json(cartItem);
    } catch {
      return res.status(404).json({ message: "Not found" });
    }
  }
};
