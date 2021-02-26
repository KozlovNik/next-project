import { prisma } from "../../lib/prismaClient";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  if (!user || !user.isLogged) {
    return res.status(401).json({ messsage: "Unauthorized" });
  }
  
  if (req.method === "POST") {
    const { productId, comment, rating } = JSON.parse(req.body);
    console.log(productId, user.id, rating, comment)
    try {
      const feedback = await prisma.feedback.create({
        select: {
          comment: true,
          rating: true,
          user: { select: { firstName: true, lastName: true, id: true } },
          dateCreated: true,
        },
        data: { comment, rating: Number(rating), productId, userId: user.id },
      });
      prisma.$disconnect();
      return res.json(feedback);
    } catch (err) {
      console.log(err)
      return res.status(400).json({ message: "Bad request" });
    }
  } else if (req.method === "HEAD") {
    const { productId } = req.query;
    try {
      const feedback = await prisma.feedback.findUnique({
        where: {
          Feedback_userid_productid_key: {
            productId: Number(productId),
            userId: user.id,
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
