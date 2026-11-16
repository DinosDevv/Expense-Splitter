import express from "express";
import { groupsRouter } from "./routes/groups.js";

const app = express();
app.use(express.json());

app.use("/api/groups", groupsRouter)

app.listen(3000, () => console.log("API on :3000"));