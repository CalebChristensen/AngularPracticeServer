require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize ('bookapi', 'postgres', process.env.PASS, {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
    .then(function() {console.log('Boss, We just connected to the postgres DB. Do you need Evac?');},
    function(err) {console.log(err);});

module.exports = sequelize;