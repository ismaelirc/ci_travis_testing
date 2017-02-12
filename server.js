var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var client = process.env.NODE_APP_DIRECTORY === 'production'
? '/client/dist' : '/client';
var port = process.env.PORT || 8081;
app.use(serveStatic(__dirname + client));
app.listen(port,function(){
console.log('localhost:'+port);
});