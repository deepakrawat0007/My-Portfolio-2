const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require('body-parser');
const fileupload = require("express-fileupload");
const routes = require("./Route/route")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(fileupload({
    useTempFiles : true
}))

app.use("/" , routes)

app.get("/" , async(req,res)=>{
    return res.status(200).json({
        message:"Server is OK"
    })
})

module.exports = app