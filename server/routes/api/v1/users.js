const express = require("express");
const router = express.Router();

const sha256 = require("sha256");

const User = require("../../../models/User");

router.get("/", (req, res) => {});

router.post("/add-user", (req, res) => {
  let newUser = req.body;
  const userKeys = Object.keys(newUser);
  userKeys.forEach((key) => {
    if (!newUser[key]) res.status(400).json({ msg: "All Fields Required" });
  });

  User.findOne({ email: newUser.email }).then((user) => {
    if (user) res.status(400).json({ msg: "User Already Exist" });

    newUser = new User(newUser);
    newUser.password = sha256(newUser.password);
    newUser.save().then((user) => {
      console.log(user);
      delete user.password;
      console.log(user);
      res.json({
        user: {
          email,
          firstName,
        },
      });
    });
  });
});

module.exports = router;
