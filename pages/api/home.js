import { getLast12 } from "../../lib/database";

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(getLast12())
  } else {
    res.status(500).json({ error: `:/` })
  }
}