// server.js
const connect = require("connect");
const url = require("url");

const app = connect();

app.use("/lab2", (req, res) => {
  const q = url.parse(req.url, true).query;
  let x = Number(q.x);
  let y = Number(q.y);
  let r;

  if (isNaN(x) || isNaN(y)) {
    res.end("x and y must be numbers");
    return;
  }

  if (q.method === "add") r = x + y;
  else if (q.method === "subtract") r = x - y;
  else if (q.method === "multiply") r = x * y;
  else if (q.method === "divide") r = x / y;
  else {
    res.end("invalid method");
    return;
  }

  res.end(JSON.stringify({ x: q.x, y: q.y, operation: q.method, result: r }));
});

app.listen(3000);
