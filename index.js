// require('dotenv').config();
const express = require('express');

const app=express();
app.use(express.json());
// const User = require("./models/user");
const mongoose= require('mongoose');
const port= process.env.PORT || 9090



//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.set('view engine', 'ejs')
app.use("", require("./routes/routes"))

// Connect with Database    password//opCnoaVFYX8P3sLs
mongoose.connect("mongodb+srv://students:opCnoaVFYX8P3sLs@cluster0.woaas.mongodb.net/students?retryWrites=true&w=majority").then(data=>{console.log('connection Success');
}).catch(err =>{
    console.log(err);
});

app.listen(port,()=>{
    console.log('server Running At Port' + port)
})