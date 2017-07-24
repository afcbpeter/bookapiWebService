/**
 * Created by peterki on 21/07/2017.
 */
var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my API')
});

app.listen(port, function(){
    console.log('Running on PORT: ' + port)
});