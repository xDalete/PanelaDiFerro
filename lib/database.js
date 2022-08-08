import { readdirSync, writeFileSync, existsSync, readFileSync } from "fs";

function getReceita(id) {
  if (existsSync(`./receitas/${id}.json`)) return JSON.parse(readFileSync(`./receitas/${id}.json`))
  else return { id: null }
}

function addReceita(receita) {
  receita.id = readdirSync(`./receitas`).length + 1;
  receita.img = `${receita.id}.${receita.img}`
  writeFileSync(`./receitas/${receita.id}.json`, JSON.stringify(receita))
  return receita.id
}

function getLast12() {
  const all = reverse(readdirSync(`./receitas`))
  var receitas = []
  for(i = 0;i < 12;i++){
    receitas.push(getReceita(all[i].replace(".json","")))
  }
  return receitas
}

export { getReceita, addReceita, getLast12 }