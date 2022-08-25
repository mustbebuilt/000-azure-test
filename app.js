const express = require("express");

const app = express();

// require routes
const routes = require("./routes/routes");

app.use(express.static("./public"));

app.use("/", routes);

// add 404 handler

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
