// This is a server side
const express = require('express')
const app = express()
const request = require('request');


app.use(function(req, res, next) {
    //  here im allowing CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Here im using just Get req
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // Using nothing but its importent
    next();
});

app.get('/fake', function(req, res) {
    // Here im waiting for req and check about reliability Information
    var id = req.query.id;
    var url =     'http://www.politifact.com/search/?q='+id;
    request(url, function (error, response, body) {
        if (body.indexOf("search-results__item") !== -1) {
            if (body.indexOf("true") !== -1) {
                console.log("real");
                res.send("real");
            }
            else{
                console.log("fake");
                res.send("fake");
            }
        }
        else{
            console.log("fake");
            res.send("fake");
        }
    })}
)

var server = app.listen(80);
console.log('listening on port 80!');


