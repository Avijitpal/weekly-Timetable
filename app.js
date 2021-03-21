
var express = require('express');
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
    var event = req.body.event;
    var data={
      title:req.body.title,
      event:req.body.event,
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

 
//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
