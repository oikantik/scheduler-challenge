const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "",
  });
});

app.listen(PORT, () => console.log("server started"));
