import bcrypt from "bcrypt";
import withSession from "../../lib/session";
import { prisma } from "../../lib/prismaClient";

export default withSession(async (req, res) => {
  const { email, password } = JSON.parse(req.body);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  prisma.$disconnect();

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { id, firstName, password, ...rest } = user;
      req.session.set("user", { isLogged: true, id, firstName });
      await req.session.save();
      return res.json({ id, firstName, ...rest });
    }
  }

  return res.status(404).json({ message: "Пользователь не найден" });
});
