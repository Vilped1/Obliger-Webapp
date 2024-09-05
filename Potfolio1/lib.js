import { readFile, writeFile } from "node:fs/promises"

export async function getProdjectData() {
    const data = await readFile('./data-storing.json', "utf-8")
    const paredData = JSON.parse(data)
    return paredData
}

export async function updateProdjectData(event) {
    await writeFile("./data-storing.json", JSON.stringify(event))
}