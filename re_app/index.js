const express = require('express')
const app = express()
var path = require('path');

app.get('/', function(req,res) { 
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(3000)
console.log('Running at port 3000');
