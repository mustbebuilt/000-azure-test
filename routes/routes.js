const express = require("express");
const router = express.Router();
const DbName = process.env.DATABASE_NAME;

router.get("/test", (req, res) => {
  return res.send(DbName);
});

module.exports = router;
