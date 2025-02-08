import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response } from "express";
import counterpartyRoutes from "./routes/counterpartyRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "";
console.log("MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/counterparties", counterpartyRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});
