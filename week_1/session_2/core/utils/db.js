var mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/gemo'
const dbName = 'gemo';

mongoose.connect(dbURL);

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

module.exports = database;