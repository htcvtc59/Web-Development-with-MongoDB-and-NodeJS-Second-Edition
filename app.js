var MongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://tron:GTj5xX7Z@ds157980.mlab.com:57980/mongo',
    sampleCollection = 'chapters';
var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}, {
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}, {
    'Title': 'Peter',
    'Author': 'Job'
}];
MongoClient.connect(connectionUrl, function (err, db) {
    console.log("Connected correctly to server");
    //Get some collection
    var collection = db.collection(sampleCollection);
    collection.insert(chapters, function (error, result) {
        if (!error) {
            console.log("Success : " + result.ops.length + "chapters inserted");
        } else {
            console.log("Some error was encountered !");
        }
        db.close();
    });
});