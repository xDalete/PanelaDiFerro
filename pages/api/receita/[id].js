import { getReceita } from "../../../lib/database";

export default async (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(await getReceita(req.query.id))
  } else {
    res.status(500).json({ error: `:/` })
  }
}