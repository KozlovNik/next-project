import { prisma } from "../../../lib/prismaClient";
import withSession from "../../../lib/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  if (!user || !user.isLogged) {
    return res.status(401).json({ messsage: "Unauthorized" });
  }

  const productId = Number(req.query.id);

  if (req.method === "DELETE") {
    try {
      const favorite = await prisma.favorite.delete({
        where: {
          Favorite_userId_productId_key: { userId: user.id, productId },
        },
      });
      prisma.$disconnect();
      return res.json(favorite);
    } catch (err) {
      return res.status(404).json({ message: "Not found" });
    }
  } else if (req.method === "PUT") {
    const { mark } = JSON.parse(req.body);
    try {
      const favorite = await prisma.favorite.update({
        where: {
          Favorite_userId_productId_key: { userId: user.id, productId },
        },
        data: {
          mark,
        },
      });
      console.log(favorite);
      return res.json(favorite);
    } catch {
      return res.status(400).json({ message: "Bad request" });
    }
  }
});
