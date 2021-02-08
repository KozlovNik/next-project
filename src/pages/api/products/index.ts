import { NextApiResponse, NextApiRequest } from "next";
import { getProductData } from "../../../lib/dataFunctions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const productData = await getProductData({ ...req.query });
  res.json({ ...productData });
};
