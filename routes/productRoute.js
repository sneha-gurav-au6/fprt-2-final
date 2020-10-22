const express = require("express");
const router = express.Router();
const passport = require("passport");
var jwt = require("jwt-simple");
const upload = require("../config/multer");
const {
    addProducts,
    getAllCources,
    deleteProduct,
} = require("../controller/apiController/productApiController");

router.post(
    "/addproduct",
    passport.authenticate("jwt", { session: false }),
    upload.array("image", 3),
    addProducts
);

router.get("/getallproduct", getAllCources);
//delete prouct
router.post(
    "/deleteProduct/:id",
    passport.authenticate("jwt", { session: false }),
    deleteProduct
);
module.exports = router;
