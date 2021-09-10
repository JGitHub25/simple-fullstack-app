const express = require("express");
const app = express();

const { readFile } = require("fs").promises;

// app.get("/", (req, res) => {
//   readFile("./home.html", "utf8", (err, html) => {
//     if (err) {
//       res.status(500).send("Sorry out of order");
//     }

//     res.send(html);
//   });
// });

app.get("/", async (req, res) => {
  res.send(await readFile("./home.html", "utf8"));
});

app.get("/about", async (req, res) => {
  res.send(await readFile("./about.html", "utf8"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App available on http://localhost:3000`);
});
