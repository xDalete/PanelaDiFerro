import { getReceitas } from "../../../lib/database";

export default async (req, res) => {
  if (req.method === "GET") {
    res.setHeader('Cache-Control', 's-maxage=60', 'stale-while-revalidate')
    res.status(404).json(await getReceitas(req.query.search))
  } else {
    res.status(405).send("405 - Método não permitido!")
  }
}