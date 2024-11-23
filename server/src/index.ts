import express from "express";

const app = express();

app.use(express.json());

app.listen(3002, () => {
  console.log("The server is active on port 3002!");
});

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Node Express!");
});
