const express = require("express");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productsRoutes");
const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/category", categoryRoutes);
app.use("/products", productRoutes);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
