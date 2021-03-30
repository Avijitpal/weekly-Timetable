var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {

    if (err) return console.error(err)
    console.log('Connected to Database')

}); 


async function addOrderToDb(jsonData) {
    const client = await MongoClient.connect(url, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    const db = client.db('mainDb');
    const ok = await db.collection("allOrders").insertOne(jsonData);

    if(ok)
        console.log("inserted data to db success");

    client.close();
}

module.exports ={
    addOrderToDb:addOrderToDb
}

