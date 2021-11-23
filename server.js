const express = require("express");
const database = require("./database/db");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/category", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
