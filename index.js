var express = require('express');
var app = express();

app.use(express.static('public'));


var server = app.listen(8000, function () {
    console.log('Node server is running on port 8000...');
    console.log('Try localhost:8000/chicken.jpg');
});