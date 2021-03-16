// load or create a server 
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 2766;
var mongoDbUrl = "mongodb://localhost:27017/Time-table";
let mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/Time-table", 
{ useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', function(){
    console.log('connection done');
}).on('error',function(error){
    console.log('error is',error)
});

app.use(express.urlencoded({extended:true}));

//getting the title

app.get('/title',function(req,res){
    res.sendFile('puindex.html');
});
app.post('/title',function(req,res){
    var name = req.body;
    res.send(name+ 'title submitted!');
    console.log("the title is added")
})


//app.use("/users",(req,res,next)=>{
   // var name = {firstname: "avijit",lastname:"pal"}
  //  res.json([name])
  //  next();
//})

// starting the server
app.listen(port, function () {
        console.log("hello the server is on");
    })

app.post('/title', function(req,res){
  var title = {
       text:String,
  };
 mongoose.Collection('Title').insertOne(title,function(err, collection){
   if(err) throw err;
   console.log("added in the databse");
 });
})

app.use(express.static('/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});

   