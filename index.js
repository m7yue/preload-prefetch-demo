const express = require("express");
const app = express();
const port = 9999;

app.use((req, res, next) => {
  const { t, ma } = req.query;
  // res.setHeader("Cache-Control", `max-age=0`);
  // res.setHeader("Cache-Control", `max-age=no-cache`);
  res.setHeader("Cache-Control", `max-age=no-store`);
  setTimeout(next, t);
}, express.static("./static"));

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});