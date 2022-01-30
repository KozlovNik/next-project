/* eslint-disable no-param-reassign */
import { serialize, CookieSerializeOptions } from "cookie";
import { NextApiResponse } from "next";

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: string,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? `j:${JSON.stringify(value)}` : String(value);

  if (!options.maxAge && !options.expires) {
    options.expires = new Date(Date.now() + 60 * 60 * 24 * 1000);
  }
  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};
