// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.query.username) {
      return res.status(400).json({ error: "No username given" });
    }

    const api_data = await axios({
      method: "get",
      url: `https://api.twitter.com/2/users/by?usernames=${req.query.username}&user.fields=created_at,description,id,name,profile_image_url,public_metrics,url,username`,
      headers: { authorization: `Bearer ${process.env.BEARER_TOKEN}` },
    });
    return res.status(200).json(api_data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
