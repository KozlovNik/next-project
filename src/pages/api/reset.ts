import withSession from "../../lib/session";
import { prisma } from "../../lib/prismaClient";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { setCookie } from "../../lib/cookies";

export default withSession(async (req, res) => {
  if (req.method === "POST") {
    const { password, token } = JSON.parse(req.body);

    let decoded: any;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (err) {
      return res.status(400).json({ message: "Invalid data" });
    }

    if (!password || !validator.isLength(password, { min: 6 })) {
      return res.status(400).json({ message: "Invalid data" });
    }

    const hash = await bcrypt.hash(password, 10);

    let user;
    try {
      user = await prisma.user.update({
        where: {
          email: decoded.email,
        },
        data: {
          password: hash,
        },
      });
    } catch (e) {
      return res.status(409).json({ message: "Invalid data" });
    }

    setCookie(res, "cp", "true", {
      maxAge: -1,
      httpOnly: true,
      sameSite: true,
      path: '/'
    });
    
    res.json({ message: "success" });
  } else {
    res.status(405).json({ message: `${req.method} method is not allowed` });
  }
});
