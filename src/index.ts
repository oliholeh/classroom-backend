import express from "express";
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))
app.use(express.json());

app.use("/api/subjects", subjectsRouter);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Classroom API" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});