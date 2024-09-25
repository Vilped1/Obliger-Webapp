import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { getProdjectData, updateProdjectData } from "./lib";
import { ProjectType } from "./type";

const app = new Hono()
app.use(cors({origin: "*"}))

app.get("/", async (c) => {
    const data = await getProdjectData()
    return c.json({data})
})

app.post("/", async (c) => {
    const body = await c.req.json<ProjectType>()
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
