import express from "express";
import cors from "cors"
import pages from "./router/pages"

const app = express()
const PORT = 8080

app.use(cors())
app.use("/", pages)

app.listen(PORT, () => console.log("Server running on port " + PORT))