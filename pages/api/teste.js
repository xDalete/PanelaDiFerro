import formidable from "formidable";
import { addReceita } from "../../lib/database";


export default async (req, res) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.parse(req, async function(err, fields, files) {

      if(
          Object.keys(fields).length != 6 ||
          Object.keys(fields).some(field => !['titulo','ingredientes','modo_preparo','observacoes','tempo_preparo','porcoes'].includes(field)) ||
          !files.thumb
      ) return res.status(400).json({ erro:"O request não segue os parametros esperados pelo servidor."});
      
      
      // if (fields?.titulo.trim() == "") return res.status(400).json({ erro: `Titulo necessário` });
      // if (!Array.isArray(fields?.ingredientes) || fields?.ingredientes.length < 2 ) return res.status(400).json({ erro: `É necessario ter ao menos 2 ingredientes` });
      // if (fields?.modo_preparo.trim() == "") return res.status(400).json({ erro: `Modo de preparo necessário` });
      // if (fields?.tempo_preparo.trim() == "") return res.status(400).json({ erro: `Tempo de preparo necessário` });
      // if (fields?.porcoes.trim() == "") return res.status(400).json({ erro: `Quantidade de porções necessária` });
      // if (!files?.thumb) return res.status(400).json({ erro: `Imagem necessária` })
      // if (files?.thumb.mimetype != "image/jpeg" && files.thumb.mimetype != "image/png") return res.status(400).json({ erro: `Formato de imagem não suportado` })
      let receita = await addReceita({
        titulo: fields.titulo,
        ingredientes: fields.ingredientes,
        modo_preparo: fields.modo_preparo,
        tempo_preparo: fields.tempo_preparo,
        porcoes: fields.porcoes,
        observacoes: fields.observacoes,
        image: `${files.thumb.filepath.split("/")[2]}-${new Date().getTime()}`,
      }, files.thumb.filepath)
      return res.status(201).json(receita);
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