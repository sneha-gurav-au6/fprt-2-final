const express = require("express")
const app = express()
const PORT = 4000
const dotenv = require("dotenv");
dotenv.config();
require("./db")
app.use(express.json());

const userRoute = require("./routes/userRoute")
app.use(userRoute)


app.get("/",(req,res)=>{
    res.send("hello")
})
app.listen(PORT,()=>{
console.log("server started")
})