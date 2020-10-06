const express = require("express");
const cors = require("cors");
const routes = require("./app");
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3000, () => {
  console.log("server on port 3000");
});
