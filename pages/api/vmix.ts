import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    if (req.method === "GET" && req.query.address && req.query.port) {
      const { address, port } = req.query;
      const vMixRes = await fetch(`http://${address}:${port}/API`);
      const xml = await vMixRes.text();
      res.status(200).send(xml);
    } else if (req.method === "POST" && req.query.address && req.query.port) {
      const { address, port } = req.query;
      const { queryString } = JSON.parse(req.body);
      const vMixRes = await fetch(
        `http://${address}:${port}/API?${queryString}`
      );
      res.status(200).json({
        address,
        port,
        queryString,
        vMixRes,
      });
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(404).send({ error });
  }
};

export default handler;
