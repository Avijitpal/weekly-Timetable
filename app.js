// load or create a server 
const express = require('express');
const app = express();
const port = 2766;




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
