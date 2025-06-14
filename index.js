import express from "express";
import cors from "cors"
import { config_db } from "./database/config.js";
import budgetRoute from "./routes/budget.route.js"
import spednRoute from "./routes/spend.route.js"

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

app.use("/api",budgetRoute)
app.use("/api", spednRoute)

app.get("/", (req, res) => {
  res.json("Hello World")
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

try {
  await config_db.authenticate();
  config_db.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}