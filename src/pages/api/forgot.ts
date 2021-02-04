import { prisma } from "../../lib/prismaClient";
import { NextApiResponse, NextApiRequest } from "next";
import { setCookie } from "../../lib/cookies";
import jwt from "jsonwebtoken";
import { transporter } from "../../lib/mailConfig";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = JSON.parse(req.body);

  if (!email) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  prisma.$disconnect();

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  var token = jwt.sign({ email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  await transporter.sendMail({
    from: '"Николай Козлов" <zccczzccz@yandex.ru>',
    to: email,
    subject: "subject",
    text: email,
    html: `<b>${process.env.URL}/reset/${token}</b>`,
  });

  setCookie(res, "cp", "false", {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    sameSite: true,
  });

  return res.end();
};
