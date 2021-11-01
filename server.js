const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/products/:cases", (req, res) => {
  res.send(req.params);
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
