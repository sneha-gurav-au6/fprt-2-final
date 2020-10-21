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
app.use(express.static(path.join(__dirname, "build")));
console.log(path.__dirname);
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const userRoute = require("./routes/userRoute");
app.use(userRoute);

app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(PORT, () => {
    console.log("server started");
});
