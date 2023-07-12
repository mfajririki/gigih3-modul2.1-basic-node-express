const express = require("express");
const app = express();
const port = 3069;

const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("route : /");
});

app.post("/animals", (req, res) => {
  res.send(animals);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
