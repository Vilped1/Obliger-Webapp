// // Importerer nødvendige moduler
// import { serve } from "@hono/node-server";
// import { Hono } from "hono";
// import { cors } from "hono/cors";
// import { serveStatic } from "@hono/node-server/serve-static";
// // Import av fs for å kunne lese filer
// import fs from 'node:fs/promises'


// // Oppretter en ny Hono-applikasjon
// const app = new Hono();

// // Aktiverer CORS (Cross-Origin Resource Sharing) for alle ruter
// app.use("/*", cors());

// // Setter opp statisk filbetjening for filer i "static" mappen
// // Det er her vi legger til styles.css
// // app.use("/static/*", serveStatic({ root: "./" }));

// // Initialiserer en liste med vaner (habits)
// const habits = [
//   {
//     // id: crypto.randomUUID(),
//     title: "Game",
//     createdAt: new Date("2024-01-01"),
//   },
// ];

// // Definerer en GET-route for å hente JSON-data
// // Leser fra en fil og returnerer dataen som JSON
// app.get("/json", async (c) => {
//   const data = await fs.readFile('/data-storing.json', 'utf8')
//   const dataAsJson = JSON.parse(data)
//   return c.json(dataAsJson);
// });

// // Definerer en POST-rute for å legge til nye vaner
// // Denne ruten forventer en JSON-forespørsel med data om den nye vanen
// // POST fra frontend til http://localhost:3999/add
// app.post("/add", async (c) => {
//   const newProd = await c.req.json();
//   console.log('New habit', newProd);
//   // Legger til den nye vanen i listen med en unik ID og tidsstempel
//   habits.push({ id: crypto.randomUUID(), createdAt: new Date(), ...newProd });

//   // Returnerer den oppdaterte listen med vaner og en 201 (Created) statuskode
//   return c.json(habits, { status: 201 });
// });

// // Definerer en GET-rute for å hente alle vaner
// app.get("/", (c) => {
// 	console.log(habits.length)
//   return c.json(habits);
// });

// // Definerer porten serveren skal lytte på
// const port = 3999;

// console.log(`Server is running on port ${port}`);

// // Starter serveren
// serve({
//   fetch: app.fetch,
//   port,
// });






import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const app = new Hono()
app.use("/*", cors())

app.use("/statics/*", serveStatic({root: "./"}))

// Fetching what is in data-storing
app.get("/json", async (c) => {
    const data = await readFile("./data-storing.json", "utf-8")
    return c.json(JSON.parse(data))
})

app.post("/postjson", async (c) => {
    const body = await c.req
    console.log(body);
    return c.text("Success", 201);
})

const port = 3999
console.log("Server running!")

serve({
    fetch: app.fetch,
    port,
})
