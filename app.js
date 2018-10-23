let express = require('express');
let app = express ();
let book = require('./controllers/bookcontroller')

let sequelize = require('./db')
let bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use('/book', book)

app.listen(3000, function() {
  console.log('App is listening on 3000.')
});