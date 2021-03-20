
var express = require('express');
var port = 2777;
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
//const { Db } = require('mongodb');
var url= "mongodb://localhost:27017/Time-table";
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//listing that the server is on
app.listen(port,()=>{
    
    console.log("server is up");
})

//app.use(express)
//getting the title
app.post('/eventdata',function(req,res){
    data={
             title:req.body.title,
             event:req.body.event,
    };
    
    console.log(JSON.stringify(data));
})

MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
   if (err) 
   	throw err
   else
   {
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	app.listen(3000);
    db.close();
   }
 });

//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
