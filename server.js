const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Server running");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
