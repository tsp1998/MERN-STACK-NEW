const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/emp", () => {
  console.log("connected");
});

const UserSchema = mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", UserSchema);

const user = new User({
  name: "Shubham",
});

user.save().then((res) => {
  console.log(res);
});
