// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
type Data = {
  name: string;
  data: object;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data :{ news } }: any = await axios.get("https://www.tagesschau.de/api2/news");
  const d = news.slice(20).map((n:any)=>({
    img:n?.teaserImage?.klein1x1?.imageurl,
    title:n?.title,
    date:`${new Date(n?.date).getDay()}/${new Date(n?.date).getMonth()}`
  }))
  // console.log(news);

  res.status(200).json({ name: "John Doe", data: d });
}
