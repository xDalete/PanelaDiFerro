import { getReceitas } from "../../../lib/database";

export default async (req, res) => {
  if (req.method === "GET") {
    console.log(req.query.search)
    res.setHeader('Cache-Control', 's-maxage=60', 'stale-while-revalidate')
    res.status(200).json(await getReceitas(""))
  } else {
    res.status(405).send("405 - Método não permitido!")
  }
}