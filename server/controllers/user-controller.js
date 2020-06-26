const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const sha256 = require("sha256");

//utils
const newBlockchain = require("../utils/new-blockchain");

//configs
const { JWT_SECRET } = require("../config/keys");

exports.getUsers = async (req, res, next) => {
  let UserId;
  if (req.params.UserId) UserId = req.params.UserId;
  try {
    const query = UserId ? { _id: UserId } : {};
    const Users = await User.find(query);
    if (Users) {
      return res.json({ Users });
    } else {
      next(new Error("No Users Found"));
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserByEmailAndPassword = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const userData = {
          uid: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          userType: user.userType,
        };
        const token = await jwt.sign(userData, JWT_SECRET);
        if (token) return res.json({ user: userData, token });
        else return next(new Error("Token not Generated"));
      } else {
        return next(new Error("Password not matched"));
      }
    } else {
      return next(new Error("No Users Found"));
    }
  } catch (error) {
    return next(error);
  }
};

exports.postAddUser = async (req, res, next) => {
  const { firstName, lastName, email, phone, userType, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      userType,
      password: hashedPassword,
    });

    const user = await newUser.save();
    if (user) {
      if (userType == "miner") {
        const blockchain = newBlockchain(user._id);
        fs.writeFile(
          path.join(
            __dirname,
            "..",
            "data",
            `${sha256(user._id.toString())}.json`
          ),
          JSON.stringify(blockchain),
          (err) => {
            if (err) console.log(err);
            console.log("Blockchain saved");
          }
        );
      }

      return res.json({ user });
    } else {
      next(new Error("User Not Added"));
    }
  } catch (error) {
    next(error);
  }
};

exports.postUpdateUser = async (req, res, next) => {
  const {
    UserId,
    name,
    price,
    description,
    sizes,
    colors,
    imageUrls,
  } = req.body;
  try {
    let User = await User.findById(UserId);
    if (User) {
      updatedUser = {
        ...User,
        name,
        price,
        description,
        sizes,
        colors,
        imageUrls,
      };
      User = await updatedUser.save();
      if (User) {
        return res.json({ User });
      } else {
        next(new Error("User Not Updated"));
      }
    } else {
      next(new Error("User Not Found For Updation"));
    }
  } catch (error) {
    next(error);
  }
};
