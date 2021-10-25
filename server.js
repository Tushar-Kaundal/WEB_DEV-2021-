const express = require("express");

const PORT = 3000;

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server up and running");
// });

// app.post("/", (req, res) => {
//   res.send("Server up and running");
// });

// app.get("/", (req, res) => {
//   console.log(req.headers);
//   if (
//     req.headers["user-agent"] ===
//     "Thunder Client (https://www.thunderclient.io)"
//   ) {
//     res.send("GET");
//   } else {
//     res.send("");
//   }
// });

// const verify = (req, res, next) => {
//   if (
//     req.headers["user-agent"] ===
//     "Thunder Client (https://www.thunderclient.io)"
//   ) {
//     next();
//   } else {
//     res.send("BLOCKED");
//   }
// };

// const isAdmin = (req, res, next) => {
//   if (req.headers.admin === "true") next();
//   else res.send("Unauthorised");
// };

// app.get("/public", (req, res) => {
//   console.log(req.headers);
//   res.send("I am public route");
// });

// app.get("/private", isAdmin, (req, res) => {
//   res.send("i am an admin route");
// });

app.use(express.json());

// app.post("/signup", express.json(), (req, res) => {}); alternate of below function

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("daddddd");
});
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// module.exports = ()=>{}
