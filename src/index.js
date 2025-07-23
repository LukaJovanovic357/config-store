import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db.js";
import apiRouter from "./routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

db.authenticate()
  .then(() => {
    console.log("Connected to PostgreSQL.");
    return db.sync();
  })
  .then(() => {
    console.log("Database synchronized, starting server.");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to DB");
    console.error(err);
  });
