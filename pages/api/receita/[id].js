import { getReceita } from "../../../lib/database";

export default async (req, res) => {
  if (req.method === "GET") {
    res.setHeader('Cache-Control', 's-maxage=60', 'stale-while-revalidate')
    let receita = await getReceita(req.query.id)
    receita ? res.status(200).json(receita):res.status(404).json({ erro:"Id inválido."})
  } else {
    res.status(405).send("405 - Método não permitido!")
  }
}