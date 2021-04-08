const mongoose = require("mongoose");

// creating connection with database
mongoose.connect("mongodb+srv://n97:12345@nahians.av93k.mongodb.net/Ecall?retryWrites=true&w=majority",{
    useCreateIndex :  true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then( ()=>{
    console.log("Mongo connection successfull...");
}).catch(()=>{
    console.log("connection failed!!");
})