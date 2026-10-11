import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";
import { getFakePlan } from "./fakePlan";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend" });
});

const requestSchema = z.object({
  destination: z.string().min(1),
  budget: z.number().positive(),
  days: z.number().int().min(1).max(14),
  interests: z.string(),
});

app.post("/api/plans", async (req, res) => {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  // Simulate the AI taking a moment to respond
  await new Promise((resolve) => setTimeout(resolve, 1000));

  res.json(getFakePlan(parsed.data));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});