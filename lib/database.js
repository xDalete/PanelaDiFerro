import { readdirSync, readFileSync } from "fs";

function getReceita(id) {
    return JSON.parse(readFileSync(`./receitas/${id}.json`))
}

export { getReceita }