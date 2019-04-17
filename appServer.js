//App Entry Point
const http = require('http')

const express = require('express');

const db = require('./app/database/database');

const app = express();
const port = process.env.PORT || 3000;

//test connection
db.execute('SELECT * FROM Item')
.then(res => {
	console.log(res);
})
.catch(err => {
	console.log(err);
});

app.listen(port);

console.log(`API Server started on port ${port}`);

// var routes = require('./app/routes/appRoutes'); 
// routes(app); 