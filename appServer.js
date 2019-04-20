//App Entry Point	
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const db = require('./app/database/database');
const adminRoutes = require('./app/routes/appRoutes');
const userRoutes = require('./app/routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

//templating engine
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'app', 'public')));

//for routes 
app.use(adminRoutes);	
app.use(userRoutes);

//test connection
// db.execute('SELECT * FROM Item')
// .then(res => {
// 	console.log(res);
// })
// .catch(err => {
// 	console.log(err);
// });

app.listen(port);

console.log(`API Server started on port ${port}`);