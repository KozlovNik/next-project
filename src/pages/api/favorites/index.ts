import { prisma } from "../../../lib/prismaClient";
import withSession from "../../../lib/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  if (!user || !user.isLogged) {
    return res.status(401).json({ messsage: "Unauthorized" });
  }
  if (req.method === "POST") {
    const { productId } = JSON.parse(req.body);
    try {
      const favorite = await prisma.favorite.create({
        data: { productId, userId: user.id },
      });
      prisma.$disconnect();
      return res.json(favorite);
    } catch {
      prisma.$disconnect();
      return res.status(400).json({ messsage: "Bad request" });
    }
  }
});
