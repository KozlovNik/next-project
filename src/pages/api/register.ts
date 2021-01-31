import withSession from "../../lib/session";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.create({ data: JSON.parse(req.body) });
      const { id, firstName } = user;
      req.session.set("user", { id, firstName, isLogged: true });
      await req.session.save();
      res.status(201);
      res.json({ email: user.email });
    } catch (error) {
      res.status(409);
      res.json({ message: "user already exists" });
    }
  } else {
    res.status(405);
    res.json({ message: "only post method is allowed" });
  }
});
