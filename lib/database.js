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
  const all = readdirSync(`./receitas`)
  for (var i = 0; i < all.length; i++) {
    all[i] = `${all[i]}`.replace(".json", "")
  }
  all.sort(function(b, a) {
    return a - b;
  });
  var receitas = [].reverse()
  for (var i = 0; i < 12; i++) {
    var id = all[i]
    receitas.push(getReceita(id))
  }
  return receitas
}

export { getReceita, addReceita, getLast12 }