import formidable from "formidable";
import fs from "fs";
import { addReceita } from "../../lib/database";


export default (req, res) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
      if (fields.titulo.trim() == "") return res.status(400).json({ erro: `Titulo necessário` });
      if (fields.ingredientes.trim() == "") return res.status(400).json({ erro: `Ingredientes necessários` });
      if (fields.modo_preparo.trim() == "") return res.status(400).json({ erro: `Modo de preparo necessário` });
      if (fields.tempo_preparo.trim() == "") return res.status(400).json({ erro: `Tempo de preparo necessário` });
      if (fields.porcoes.trim() == "") return res.status(400).json({ erro: `Quantidade de porções necessária` });
      if (!files.thumb) return res.status(400).json({ erro: `Imagem necessária` })
      if (files.thumb.mimetype != "image/jpeg" && files.thumb.mimetype != "image/png") return res.status(400).json({ erro: `Formato de imagem não suportado` })
      if (!fields.observacoes) fields.observacoes = "";
      fields.img = `${files.thumb.originalFilename.split(".")[files.thumb.originalFilename.split(".").length - 1]}`
      let id = addReceita(fields)
      const data = fs.readFileSync(files.thumb.filepath);
      fs.writeFileSync(`./public/receitas-thumb/${id}.${files.thumb.originalFilename.split(".")[files.thumb.originalFilename.split(".").length - 1]}`, data);
      fs.unlinkSync(files.thumb.filepath);
      return res.status(201).json({ id, titulo: fields.titulo });
    });
  } else {
    res.status(405).send("405 - Método não permitido!")
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};