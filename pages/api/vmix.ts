// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { XMLParser } from "fast-xml-parser";

const xmlParser = new XMLParser();

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "GET" && req.query.address && req.query.port) {
    const { address, port } = req.query;
    const vMixRes = await fetch(`http://${address}:${port}/API`);
    const xml = await vMixRes.text();
    res.status(200).send(xml);
  } else {
    res.status(400).send("Bad request");
  }
};

export default handler;
