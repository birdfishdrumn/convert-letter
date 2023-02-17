import type { NextApiRequest, NextApiResponse } from "next";

const axios = require("axios");

const accessKey = process.env.NEXT_PUBLIC_BING_API; // Azureで取得したkeyを指定してください
const endpoint = "https://api.bing.microsoft.com/v7.0/images/search";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const jsonBody = req.body;
  const { text } = jsonBody;
  async function getData(url = "") {
    const response = await axios.get(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": accessKey,
      },
    });
    return response.data;
  }

  const query = encodeURI(text); // 空文字の判定は割愛
  const searchData = async () => {
    const searchResult = await getData(
      endpoint + "?count=50&responseFilter=Webpages&safeSearch=Strict&q=" + query
    ).then((data) => {
      console.log(data); // 元のresponseを確認する
      return data.value;
    });
    return searchResult;
  };

  const result = await searchData();

  res.status(200).json(result);
}
