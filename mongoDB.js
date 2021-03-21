var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
const mongoose = require("mongoose");

async function addOrderToDb(jsonData) {
  const client = await MongoClient.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
  });
  const db = client.db('mainDb');
  const ok = await db.collection("allOrders").insertOne(jsonData);

  if(ok)
      console.log("inserted order to db success");

  client.close();
}




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

module.exports ={
  addOrderToDb: addOrderToDb,
}
