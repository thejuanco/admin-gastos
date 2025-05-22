import express from "express";
import { config_db } from "./database/config.js";
import budgetRoute from "./routes/app.route.js"

const app = express()

// Middleware
app.use(express.json())

app.use("/api",budgetRoute)

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