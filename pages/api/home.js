import { getLast12 } from "../../lib/database";

export default async (req, res) => {
  if (req.method === "GET") {
    res.setHeader('Cache-Control', 's-maxage=60', 'stale-while-revalidate')
    res.status(200).json(await getLast12())
  } else {
    res.status(405).json({ error: `:/` })
  }
}