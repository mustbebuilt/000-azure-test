const express = require("express");
const router = express.Router();
module.exports = () => {
  router.get("/example", (req, res) => {
    return res.send("<p>Example</p>");
  });
  router.get("/section", (req, res) => {
    return res.send("<p>Section</p>");
  });
  router.get("/test", (req, res) => {
    return res.send("<p>test</p>");
  });
  return router;
};
