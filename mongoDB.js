var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Time-table";
const mongoose = require("mongoose");

MongoClient.connect(url,function(err,db){
    console.log("database is connected");
    db.close();
});






//(function updateUserdataToDb(jsonData) {
    
   // var newValues = {$set : jsonData} 
 //   MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  //      if (err) throw err;
   //     var dbo = db.db("mainDb");
     //   dbo.collection("userData").updateOne({"userId": jsonData["userId"]}, newValues, {upsert: true}, function(err, res) {
 //           if (err) throw err;
   //         console.log("userData updated to ", jsonData);
    //        db.close();
//        });
   // }); 


