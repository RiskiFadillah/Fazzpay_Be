const express = require("express");
const router = express();

const usersController = require("../controller/users.controller");
const formUploadOnline = require("../middleware/formUpload");

router.get("/", usersController.get);
router.get("/:id", usersController.getDetail);
router.patch(
  "/editprofile/:id",
  formUploadOnline.single("images"),
  usersController.editProfile
);
router.patch("/topup/:id_users", usersController.topup);

module.exports = router;
