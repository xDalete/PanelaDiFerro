export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).send('fds')
  } else {
    res.status(500).json({ error: `:/` })
  }
}
