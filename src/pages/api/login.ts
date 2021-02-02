import withSession from "../../lib/session";
import { prisma } from "../../lib/prismaClient";

export default withSession(async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
  if (user && user.password === password) {
    const { id, firstName } = user;
    req.session.set("user", { isLogged: true, id, firstName });
    await req.session.save();
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
