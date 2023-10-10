import express from "express";
import cors from "cors";
import facilities from "./api/facilities.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/admin", facilities);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
