var express = require('express'),
    config = require('./server/configure'),
    mongoose = require('mongoose')
app = express();
mongoose.connect('mongodb://tron:GTj5xX7Z@ds157980.mlab.com:57980/mongo', {
    useMongoClient: true,
});
mongoose.connection.on('open', function () {
    console.log('Mongoose connected.');
});
app.set('port', process.env.PORT || 5500);
app.set('views', __dirname + '/views');
app = config(app);
// app.get('/', function(req, res){ 
//    res.send('Hello World'); 
// });
var server = app.listen(app.get('port'),
    function () {
        console.log('Server up: http://localhost:' + app.get('port'));
    }); 