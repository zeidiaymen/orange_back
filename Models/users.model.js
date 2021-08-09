var mongoose = require("mongoose");
var data = new mongoose.Schema({
  name: String,
  last_name: String,
  email: String,
  password: String,
  address: String,
  phonr_number: String,
  role: String,
  img: String,
});
module.exports = mongoose.model("Users", data);
