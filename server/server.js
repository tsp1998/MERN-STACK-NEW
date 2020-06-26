const mongoose = require("mongoose");
const { MONGOURL } = require("./config/keys");
const express = require("express");
const app = express();
const port = process.env.PORT || process.argv[2] || 5000;
// const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

app.use(cors());

// // const DeviceUUID = require('device-uuid').DeviceUUID;
// // console.log(new DeviceUUID().get());

//parse app / x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
//parse app/json
app.use(express.json());

// app.set("view engine", "ejs");
// app.set("views", "views");

// serving static files if in production mode
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     res.render("index");
//   });
// }

//import routes
//v1 api
require("./routes/api/v1/account-routes")(app);
app.use(require("./routes/api/v1/file-routes"));
app.use("/api/users", require("./routes/api/v1/user-routes"));
app.use("/api/blockchain", require("./routes/api/v1/blockchain-routes"));

app.get("/", (req, res, next) => {
  next(new Error("wrong email"));
});
//error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 404;
  const message = err.message;
  const data = err.data;
  const error = { message, data };
  console.error("Error: ", error);
  res.status(statusCode).json(error);
});

// app.get("/html", (req, res, next) => {
//   console.log("object");
//   app.use(express.static(path.join(__dirname, "public")));
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/const", (req, res) => {
//   const { USER_LOADING, USER_LOADED } = require("./constants");
//   res.send(USER_LOADING + USER_LOADED);
// });

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Listening on ${port}`);
  console.log(`http://localhost:${port}`);
  console.log("Waiting MongoDB Connection");
  mongoose
    .connect(MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("MongoDB Connection Success"))
    .catch((err) => console.error(`MongoDB Error: ${err}`));
});
