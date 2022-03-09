import { XMLParser } from "fast-xml-parser";

export const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

export const fetchVMix = async (address: string, port: number) =>
  fetch(`http://${address}:${port}/API`).then((res) => res.text());
