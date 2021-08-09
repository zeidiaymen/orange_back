express = require("express");

var router = express.Router();
var controller = require("../Controllers/user.controller");
var User = require("../Models/users.model");
//get All users

router.use("/Uploads", express.static("Uploads"));
router.get("/all", controller.getUsers);

//get user by id
router.get("/:id", controller.verifyJWT, controller.getSingleUser);

//post user
router.post("/register", controller.upload, controller.postUser);

//login
router.post("/login", controller.login);

//update
router.put("/update", controller.verifyJWT, controller.updateUser);

//sendMail
router.post("/send", controller.verifyJWT, controller.emailSender);
router.get("/EmailFace/:email", (req, res) => {
  const email = req.params.email;

  User.find({ email: email }, async function (err, data) {
    if (err) throw err;
    if (data.length === 0) {
      return res.send("UserNotFound");
    } else {
      res.json(data);
    }
  });
});
router.get("/getFile/:path", controller.getFile);
//export
module.exports = router;
