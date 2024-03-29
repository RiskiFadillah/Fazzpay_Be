const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { urlencoded, json } = require("express");
const router = require("./src/router/index");
var cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/api/v1/", router);

app.get("*", (req, res) => {
  return res.send({
    status: 404,
    message: "not found",
  });
});

app.listen(port, () => {
  console.log(`backend succsessfully running on port ${port}`);
});
