const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const passport = require("passport");
//configure passport
require("./config/passport")(passport);

const dotenv = require("dotenv");
dotenv.config();
require("./db");

//cloudinary
require("./utils/cloudinary");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(passport.initialize());
//uploads for multer
app.use("/uploads", express.static("uploads"));
app.use(express.static("client/build"));
//home route call
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
app.use(userRoute);
app.use(productRoute);

app.listen(PORT, () => {
    console.log("server started");
});
