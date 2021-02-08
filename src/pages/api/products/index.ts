import { NextApiResponse, NextApiRequest } from "next";
import { getProductData } from "../../../lib/dataFunctions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { page } = req.query;
  const productData = await getProductData(page);
  res.json({ ...productData });
};
