import { prisma } from "../../lib/prismaClient";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    const user = req.session.get("user");
    if (!user || !user.isLogged) {
      return res.status(401).json({ messsage: "Unauthorized" });
    }
    const { productId: productid, comment, rating } = JSON.parse(req.body);
    try {
      const feedback = await prisma.feedback.create({
        select: {
          comment: true,
          rating: true,
          user: { select: { firstName: true, lastName: true, id: true } },
          dateCreated: true,
        },
        data: { comment, rating: Number(rating), productid, userid: user.id },
      });
      prisma.$disconnect();
      return res.json(feedback);
    } catch {
      return res.status(400).json({ message: "Bad request" });
    }
  } else if (req.method === "HEAD") {
    const user = req.session.get("user");
    if (!user || !user.isLogged) {
      return res.status(401).end();
    }
    const { productId: productid } = req.query;
    try {
      const feedback = await prisma.feedback.findUnique({
        where: {
          Feedback_userid_productid_key: {
            productid: Number(productid),
            userid: user.id,
          },
        },
      });

      prisma.$disconnect();
      if (!feedback) {
        throw new Error();
      }
      return res.end();
    } catch {
      return res.status(404).end();
    }
  }
});
