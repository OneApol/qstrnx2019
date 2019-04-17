//App Entry Point
const http = require('http')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port);

console.log(`API Server started on port ${port}`);

var routes = require('./app/routes/appRoutes'); 
routes(app); 