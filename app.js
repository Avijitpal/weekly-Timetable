
var express = require('express');
var port = 2777;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

//listing that the server is on
app.listen(port,()=>{
    
    console.log("server is up");
})


//app.use(express)
//getting the title
app.post('/title',function(req,res){
    title={
             title:req.body.title,
    };
    
    console.log(JSON.stringify(title));
})


//will load the html file and so on
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
