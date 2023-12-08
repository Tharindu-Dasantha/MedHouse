import express from "express";
import cors from "cors";
import mongodb from 'mongodb';

const app = express();
const Mongo

app.use(cors());
app.use(express.json());

app.use("/api/v1/admin", admin);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));
  
export default app;
