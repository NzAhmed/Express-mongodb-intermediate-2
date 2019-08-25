const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/product.route');


var app = express();


//Connecting to MongoDb
mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true });

// for parsing application/json
app.use(express.json()) 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 

app.use('/api', routes);

app.listen(3000, () => console.log('listening on port 3000!'))
