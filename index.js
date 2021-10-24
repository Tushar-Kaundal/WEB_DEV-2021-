// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   //request.url
//   //request.headers
//   //console.log(req.headers);
//   // const url = req.url;
//   // const markup = fs.readFileSync(path.resolve("./index.html"));
//   const { url } = req;
//   if (url === "/signup") {
//     res.write(`<h1>Signup</h1>`);
//     res.end();
//   }
//   if (url === "/login") {
//     res.write(`<h1>Login</h1>`);
//     res.end();
//   }
// });

// server.listen(4000, () => {
//   console.log(`Server listening at PORT: ${4000}`);
// });

const data = [{ name: "Anisha" }, { name: "Suman" }];

const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("hello");
// });

// app.get("/login", (req, res) => {
//   res.send("This is Login");
// });

// app.get("/signup", (req, res) => {
//   res.send("This is Signup");
// });

app.get("/getnames", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server listening at port 3000");
});
