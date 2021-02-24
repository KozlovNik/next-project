import withSession from "../../lib/session";
import { prisma } from "../../lib/prismaClient";
import validator from "validator";
import bcrypt from "bcrypt";

const fields = [
  "firstName",
  "lastName",
  "email",
  "password",
  "phone",
  "address",
];

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    for (let field of fields) {
      if (!data.hasOwnProperty(field) || validator.isEmpty(data[field])) {
        return res.status(404).end();
      }
    }

    if (
      !validator.isEmail(data.email) ||
      !validator.isLength(data.password, { min: 6 })
    ) {
      return res.status(404).end();
    }

    const { password, ...rest } = data;

    const hash = await bcrypt.hash(password, 10);

    let user;
    try {
      user = await prisma.user.create({
        data: { ...rest, password: hash },
      });
      prisma.$disconnect();
    } catch (e) {
      return res.status(409).end();
    }

    const { id, firstName } = user;
    req.session.set("user", { id, firstName, isLogged: true });
    await req.session.save();
    res.status(201).end();
  } else {
    res.status(405).json({ message: `${req.method} method is not allowed` });
  }
});
