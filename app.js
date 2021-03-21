
var express = require('express');
var port = 2777;
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
//const { Db } = require('mongodb');
var url= "mongodb://localhost:27017/mydb";
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());
var db;

//listing that the server is on
app.listen(port,()=>{
    
    console.log("server is up");
})

//app.use(express)
//getting the title
//app.post('/eventdata',function(req,res){
    //data={
      //       title:req.body.title,
        //     event:req.body.event,
    //};
    
    
//})

MongoClient.connect(url,{useUnifiedTopology:true}, function (err, database) {
   if (err) 
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
    app.listen(port);
   }
 });


app.post('/eventdata', function(req, res) {
    // Insert JSON straight into MongoDB
    data={
             title:req.body.title,
             event:req.body.event,
    };
   //db.collection('event').insert(req.body, function (err, result) {
       //if (err)
          //res.send('Error');
       //else
         //res.send('Success');
         console.log(JSON.stringify(data));
 
   //});
 });
 
//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
