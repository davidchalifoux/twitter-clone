// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let query_url: string;
    if (req.query.pagination_token) {
      query_url = `https://api.twitter.com/2/lists/1355120606346420224/tweets?max_results=50&tweet.fields=attachments,author_id,created_at,public_metrics,text&expansions=attachments.media_keys,author_id&media.fields=alt_text,height,media_key,preview_image_url,type,url,variants,width&user.fields=id,name,profile_image_url,username&pagination_token=${req.query.pagination_token}`;
    } else {
      query_url = `https://api.twitter.com/2/lists/1355120606346420224/tweets?max_results=50&tweet.fields=attachments,author_id,created_at,public_metrics,text&expansions=attachments.media_keys,author_id&media.fields=alt_text,height,media_key,preview_image_url,type,url,variants,width&user.fields=id,name,profile_image_url,username`;
    }

    const api_data = await axios({
      method: "get",
      url: query_url,
      headers: { authorization: `Bearer ${process.env.BEARER_TOKEN}` },
    });
    return res.status(200).json(api_data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
