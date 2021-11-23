const express = require("express");
const database = require("./database/db");
const app = express();
const PORT = 3000;
app.use(express.json());

database.products.push("iphone");

console.log(database);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
