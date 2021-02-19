import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../../lib/prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = Number(req.query.id);

  if (req.method === "DELETE") {
    try {
      const cartItem = await prisma.cartItem.delete({ where: { id } });

      return res.json(cartItem);
    } catch {
      return res.status(404).json({ message: "Not found" });
    }
  } else if (req.method === "PUT") {
    const { quantity } = JSON.parse(req.body);

    try {
      if (quantity < 1 || quantity > 100) {
        throw new Error();
      }
      const cartItem = await prisma.cartItem.update({
        where: { id },
        data: { quantity },
        include: { product: true },
      });

      return res.json(cartItem);
    } catch {
      return res.status(400).json({ message: "Bad request" });
    }
  }
};
