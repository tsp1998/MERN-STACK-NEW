const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/autosave", (req, res, next) => {
  setTimeout(() => {
    fs.writeFile("./files/autosave.txt", "hello", err => {
      if (err) throw err;
      console.log("Autosave File saved");
    });
  }, 5000);
  res.end();
});

module.exports = router;
