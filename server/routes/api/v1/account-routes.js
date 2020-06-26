const mongoose = require("mongoose");
require("../../../models/account-model");
const Account = mongoose.model("Account");
const jwt = require("jsonwebtoken");
const axios = require("axios");

module.exports = (app) => {
  // const account = new Account({
  //   uid: data._id,
  //   balance: 20
  // })
  // account.save().then(data => {
  //   response.accountAdded = true
  //   console.log("accountAdded");
  //   res.send(response);
  // })
  app.get("/account/:uid", (req, res) => {
    const uid = req.params.uid;
    Account.find({ uid: uid }).then((data) => {
      if (data.length > 0) {
        res.send({
          error: false,
          account: data[0],
        });
      } else {
        res.send({
          error: true,
          message: "No Account",
        });
      }
    });
  });

  app.post("/update-balance", (req, res) => {
    const account = req.body;
    Account.findOne({ uid: req.body.uid }).then(async (data) => {
      if (data) {
        const newBalance = Number(data.balance) - Number(account.amount);
        await Account.findOneAndUpdate(
          { _id: data._id },
          { balance: newBalance },
          { new: true }
        )
          .then((data) => {
            if (data)
              res.send({
                error: false,
                data: data,
              });
            else
              res.send({
                error: true,
                data: "Account Not Updated",
              });
          })
          .catch((err) => {
            console.error(err);
            throw err;
          });
      } else {
        res.send({
          error: true,
          msg: "Account Not Found",
        });
      }
    });
  });
};

function generateToken(user) {
  console.log(user);
  let u = {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    bio: user.bio,
    wayToContact: user.wayToContact,
  };

  return (token = jwt.sign(u, "mern", {
    expiresIn: 60 * 60 * 24, // 24 Hours
  }));
}
