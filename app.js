
var express = require('express');
var nodemailer = require('nodemailer')
var app = express();
var port = 2777;
var bodyParser = require('body-parser');
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
  
   var transport = nodemailer.createTransport({
     
       service: 'gmail',
       auth:{
          user:'apal731224@gmail.com',
          pass: 'avijitpal@1'
       
     }
   }
   )
  
   var mailOptions = {
     from: 'apal731224@gmail.com',
     to: 'avijitpal20309@gmail.com',
     subject: 'first mail',
     text:'body of the mail'
   }
  
   transport.sendMail(mailOptions,function(error,info){
     if(error){
       console.log(error)
     }else
     {
       console.log("sent"+info.response)
     }
   })





 
//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
