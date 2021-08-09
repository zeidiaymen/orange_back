//Declaration:

var express = require("express");
var mongoose = require("mongoose");
var app = express();
var cors = require("cors");
var logger = require("morgan");
var config = require("./dbConfig.json");
var port = 3000;
var usersRoute = require("./Routes/users");
var bp = require("body-parser");
// Cors
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: "*",
};
app.use(cors());
//Logger
app.use(logger("dev"));
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Database Connection :

mongoose
  .connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB connected"))
  .catch(() => console.log("DB connection failed"));
//Server Connection :
app.listen(port, () => {
  console.log("Server connected on port : %s", port);
});
///

app.use("/user", usersRoute);

//app.use(bp.json());
