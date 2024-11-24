import express from "express";

import { connectDatabase } from "./database";

const app = express();
const port = 3001;

async function startServer() {
  try {
    await connectDatabase();

    app.use(express.json());

    // use routes
    //app.use('/api', routes);

    app.get("/", (req, res) => {
      res.send("Hello, TypeScript Node Express!");
    });

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Failed to start the server:", error);
    process.exit(1);
  }
}
