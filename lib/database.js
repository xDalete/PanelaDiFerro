import { readdirSync, writeFileSync, existsSync, readFileSync, unlinkSync  } from "fs";
import { Client } from "pg"


async function getReceita(id) {
  return await client.query(`SELECT * FROM "ifreceitas"."Receitas" WHERE id = ${id}`)
    .then(res => {
      return res.rows[0]
    })
    .catch(e => {
      console.log(e)
      return undefined
    })
}

async function addReceita(receita,filepath) {
      writeFileSync(`./public/receitas-thumb/${receita.img}`, readFileSync(filepath));
      unlinkSync(filepath);
  return await client.query(`INSERT INTO "ifreceitas"."Receitas" (
titulo, ingredientes, modo_preparo,${receita.observacoes ? "observacoes," : ""} tempo_preparo, porcoes, image) VALUES (
'${receita.titulo}'::character varying, '{${receita.ingredientes}}'::character varying[], '${receita.modo_preparo}'::character varying,${receita.observacoes ? `'${receita.observacoes}'::character varying,` : ""} '${receita.tempo_preparo}'::integer, '${receita.porcoes}'::integer, '${receita.img}'::character varying)
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

  return await client.query(`SELECT * FROM "ifreceitas"."Receitas" ORDER BY id DESC LIMIT 12`)
    .then(res => {
      return res.rows
    })
    .catch(e => {
      console.log(e)
      return []
    })
}

const client = new Client("postgres://qrszxpxr:cVRLlu5UOfsVSPEvp38HQtzPY-tEnSFl@babar.db.elephantsql.com/qrszxpxr")
client.connect()

export { getReceita, addReceita, getLast12 }