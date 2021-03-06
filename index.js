const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res, next) => {
  throw new Error("hello");
});

app.use((err, req, res, next) => {
  if (Math.ceil(Math.random() * 20) % 2)
    return res.send({ msg: "Sent from error handler middleware" });
  res.send({ msg: "response from / route" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
