import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import tasksRouter from "./src/routes/tasks.routes";
import "./src/database/dbConnection";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.use(cors());
app.use(express.json());

app.use("/apitasks", tasksRouter);
