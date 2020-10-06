const express = require("express");
const cors = require("cors");
const routes = require("./app");
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use(routes);

const port = process.env.PORT || 2035;

app.listen(port, () => {
  console.log("server on port " + ports);
});
