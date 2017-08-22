
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
app.listen(app.get('port'), function () {
    console.log('Server up: http://localhost:' + app.get('port'));
});
app.get('/', function (req, res) {
    res.send('Hello World');
});
