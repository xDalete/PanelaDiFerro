export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ id: id })
  } else {
    res.status(500).json({ error: `:/` })
  }
}