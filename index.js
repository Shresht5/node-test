import express from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: "ok", message: "server runing perfectly" });
});

app.listen("9000", () => {
  console.log("server running at 9000");
});
