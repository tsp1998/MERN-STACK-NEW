const fs = require("fs");
const path = require("path");
const sha256 = require("sha256");

exports.getBlockchain = async (req, res, next) => {
  console.log(req.body.user);
  fs.readFile(
    path.join(
      __dirname,
      "..",
      "data",
      `${sha256(req.user.uid.toString())}.json`
    ),
    "utf8",
    (err, blockchain) => {
      if (err) return next(new Error("No Blockchain Found, Error:" + err));
      res.json(JSON.parse(blockchain));
    }
  );
};
