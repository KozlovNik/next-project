import { withIronSession, Session } from "next-iron-session";
import { NextApiResponse, NextApiRequest } from "next";

interface WithSessionRequest extends NextApiRequest {
  session: Session;
}

type Handler = (req: WithSessionRequest, res: NextApiResponse) => {};

export default function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD!,
    cookieName: "user",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });
}
