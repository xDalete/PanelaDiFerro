import { unlinkSync } from "fs";
import { Client } from "pg"
import { v2 as cloudinary } from "cloudinary"


async function getReceita(id) {
  return await client.query(`SELECT * FROM "ifReceitas"."Receitas" WHERE id = ${id}`)
    .then(res => {
      return res.rows[0]
    })
    .catch(e => {
      console.log(e)
      return undefined
    })
}

async function addReceita(receita, filepath) {
  let image = await cloudinary.uploader
    .upload(filepath, { public_id: `Receitas/${receita.image}` })
    .then(result => {
      console.log(result)
      return result.secure_url
    })
  unlinkSync(filepath);
  return await client.query(`INSERT INTO "ifReceitas"."Receitas" (
titulo, ingredientes, modo_preparo,${receita.observacoes ? "observacoes," : ""} tempo_preparo, porcoes, image) VALUES (
'${receita.titulo}'::character varying, '{${receita.ingredientes}}'::character varying[], '${receita.modo_preparo}'::character varying,${receita.observacoes ? `'${receita.observacoes}'::character varying,` : ""} '${receita.tempo_preparo}'::integer, '${receita.porcoes}'::integer, '${image}'::character varying)
 returning id;`)
    .then(res => {
      console.log(res.rows[0])
      return res.rows[0]
    })
    .catch(e => {
      console.log(e)
      return { id: null }
    })
}

async function getLast12() {

  return await client.query(`SELECT * FROM "ifReceitas"."Receitas" ORDER BY id DESC LIMIT 12`)
    .then(res => {
      return res.rows
    })
    .catch(e => {
      console.log(e)
      return []
    })
}

cloudinary.config({
  cloud_name: process.env.Cloudinary_name,
  api_key: process.env.Cloudinary_key,
  api_secret: process.env.Cloudinary_secret,
  secure: true
});

const client = new Client(process.env.postgre_url)
client.connect()

export { getReceita, addReceita, getLast12 }