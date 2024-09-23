import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { readFile, writeFile } from "node:fs/promises"
// import { getProdjectData, updateProdjectData } from "./lib";

const app = new Hono()
app.use(cors({origin: "*"}))

app.get("/", async (c) => {
    const data = await readFile('./data-storing.json', "utf-8")
    const paredData = JSON.parse(data)
    return c.json({paredData})
})

app.post("/", async (c) => {
    const body = await c.req.json()
    const data = await getProdjectData()
    data.push(body)
    await updateProdjectData(data)
    console.log(body);
    return c.json({body});
})

const port = 3899
console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port,
})
