// load or create a server 
const express = require('express');
const app = express();
const port = 2766;
var mongoDbUrl = "mongodb://localhost:27017/Time-table";
let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Time-table", 
{ useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('connection done');
}).on('error',function(error){
    console.log('error is',error)
});


//imorting modules 

app.get("/",(req,res) => {
    console.log("hello");
    res.send("hello im on");
})  
app.use("/users",(req,res,next)=>{
    var name = {firstname: "avijit",lastname:"pal"}
    res.json([name])
    next();
})

// starting the server
app.listen(port, function () {
        console.log("hello the server is on");
    })


    module.exports =
    {
      
    }