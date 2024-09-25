import { readFile, writeFile } from "node:fs/promises"
import { ProjectType } from "./type"

export async function getProdjectData() {
    const data = await readFile('./data/projects.json', "utf-8")
    const paredData = JSON.parse(data) as ProjectType[]
    return paredData
}

export async function updateProdjectData(newData: ProjectType[]) {
    await writeFile("./data/projects.json", JSON.stringify(newData))
}