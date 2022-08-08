import { addReceita } from "../../lib/database";

export default (req, res) => {
  if (req.method === "POST") {
    if (!req.body.titulo || !req.body.ingredientes || !req.body.modo_preparo || !req.body.observacoes || !req.body.tempo_preparo || !req.body.porcoes || !req.body.img) {
      res.status(400).json({ error: `Bad Request` })
    } else {
      let id = addReceita(req.body)
      res.status(200).json({ id })
    }
  } else {
    res.status(400).json({ error: `Only "POST" requests are allowed here!` })
  }
}