const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
  if (Math.ceil(Math.random() * 20) % 2)
    return res.send({ msg: "response from / route" });
  next({ msg: "Failed", code: 404 });
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
