const { static } = require("express");
const express = require("express");
const path = require("path");

const bycript = require("bcryptjs");
const bodyParser =  require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const auth = require("./src/middleware/auth");
const fs  = require("fs");
const nodemailer =  require("nodemailer")
// const controlRoute = require("./routes/control");

const apiRoute = require("./src/routes/api");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 5000;
// admin schema---------------------

const Admin  =  require("./src/models/admin");


const db = require("./src/db/connection");
// const Docregistration = require("./models/register");
// const Doctorappointment = require("./models/appointment");





app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json())
// supporting json data
app.use(express.json());
// getting cookie from browser
app.use(cookieParser())
// Middleware----
app.use('/api', apiRoute);
// app.use('/admin', controlRoute);
app.use(express.urlencoded({ extended:false}));
// app.use('/admin/',express.static(staticPath));






// create-item-routing-----------------

// home-routing-----------------
// app.get("/create-item",(req, res)=>{
//     res.render("create-item");
// });

http.listen(port, ()=>{
    console.log(`Server is listening from:${port}`);
    io.on("connection",function (socket){
        socket.on("messageSent", (message) => {
                socket.broadcast.emit("messageSent", message);
            })
    })
})


