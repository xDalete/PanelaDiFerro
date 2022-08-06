import { existsSync, readFileSync } from "fs";

function getReceita(id) {
  if (existsSync(`./receitas/${id}.json`)) return JSON.parse(readFileSync(`./receitas/${id}.json`))
  else return { id: null }
}

export { getReceita }