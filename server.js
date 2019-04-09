var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
var menu = require('./database/menu');
require('./route/route')(app, menu);


app.listen(PORT, ()=>{
    console.log('Server listenning to http://localhost:'+PORT);
})