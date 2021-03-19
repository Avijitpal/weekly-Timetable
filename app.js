const express = require('express')
const port = 2777;
const app = express();


app.listen(port,()=>{
    console.log("server is up");
})










app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.redirect('index.html');
});
