import { XMLParser } from "fast-xml-parser";

export const xmlParser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
});

export const fetchVMix = async (address: string, port: number) =>
  fetch(
    `${process.env.NEXT_PUBLIC_PROXY_URL}?url=${encodeURIComponent(
      `http://${address}:${port}/API/`
    )}`
  ).then((res) => res.text());

export const mutateVMix = async (
  address: string,
  port: number,
  queryString: string
) =>
  fetch(
    `${process.env.NEXT_PUBLIC_PROXY_URL}?url=${encodeURIComponent(
      `http://${address}:${port}/API/?${queryString}`
    )}`
  );
