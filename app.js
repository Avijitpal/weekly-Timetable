var express = require('express');
var app = express();
var port = 2777;
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var MongoClient = require('mongodb').MongoClient;
//const { Db } = require('mongodb');
var url= "mongodb://localhost:27017/mydb";
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//importing modules
var mongoDB = require('./mongo.js');
const { text } = require('body-parser');


//listing that the server is on
app.listen(port,()=>{
    console.log("server is up");
})


//getting the title
//app.post('/eventdata',function(req,res){
    //data={
      //       title:req.body.title,
        //     event:req.body.event,
    //};
    
    
//})

app.post('/eventdata', function(req, res) {
    // Insert JSON straight into MongoDB
    var title = req.body.title;
    var time = req.body.time;
    var day = req.body.days;
    var event = req.body.event;
    var data={
      title:req.body.title,
      event:req.body.event,
      time:req.body.time,
      day:req.body.days,
     
    };
    
    if(data == undefined)
    {
      console.log("the data is blank");
      res.end("ending");
    }
    else{
      async function foo()
      {
        let eventdata = data;
        await mongoDB.addOrderToDb(eventdata);
      }
      foo();
    }
       res.end();
    
         console.log(JSON.stringify(data));
   });
//app.post('/email',function(req,res){
  //var email = req.body.email;
  //if(email == undefined){
  //  res.write("please enter a valid email");
  //}
  //var transporter = nodemailer.createTransport({
   // service:'gmail',
    //auth:{
      // user:'weeklytimetable01@gmail.com',
     //  pass:'Timetable011',
    //}
  //});
  //var mailoptions ={
    //from: 'weeklytimetable01@gmail.com',
    //to: email,
    //subject:'First try',
    //text: 'first try'
  //};
//transporter.sendMail(mailoptions,function(error,info){
 // if(error){
   // console.log(error);
  //} else{
  //  console.log('email sent'+info.respose);
  //}
//})
//});

  
//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
