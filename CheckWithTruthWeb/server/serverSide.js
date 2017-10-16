const express = require('express')
const app = express()
const request = require('request');

app.get('/fake', function(req, res) {
    var id = req.query.id;
    var url =     'http://www.politifact.com/search/?q='+id;
    request(url, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML .
        console.log('id = ' + id);
        res.send(body);
        console.log('Example app listening on port 3000!');
        console.log(url);
    });
})
var server = app.listen(8080);
