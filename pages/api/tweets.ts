// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.query.user_id) {
      return res.status(400).json({ error: "No user_id given" });
    }

    let queryUrl: string;
    if (req.query.pagination_token) {
      queryUrl = `https://api.twitter.com/2/users/${req.query.user_id}/tweets?max_results=10&pagination_token=${req.query.pagination_token}&tweet.fields=author_id,created_at,id,public_metrics,text&expansions=attachments.media_keys,author_id&media.fields=alt_text,duration_ms,height,media_key,type,url,variants,width&user.fields=id,name,profile_image_url,public_metrics,url,username`;
    } else {
      queryUrl = `https://api.twitter.com/2/users/${req.query.user_id}/tweets?max_results=10&tweet.fields=author_id,created_at,id,public_metrics,text&expansions=attachments.media_keys,author_id&media.fields=alt_text,duration_ms,height,media_key,type,url,variants,width&user.fields=id,name,profile_image_url,public_metrics,url,username`;
    }

    const api_data = await axios({
      method: "get",
      url: queryUrl,
      headers: { authorization: `Bearer ${process.env.BEARER_TOKEN}` },
    });
    return res.status(200).json(api_data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
