const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");
dotenv.config();
require("./db");
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);

// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });
app.use(express.static("client/build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
const userRoute = require("./routes/userRoute");
app.use(userRoute);

app.listen(PORT, () => {
    console.log("server started");
});
