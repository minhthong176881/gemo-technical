let express = require('express');
const db = require('./utils/db');
const User = require('./models/user')
let app = express();
const routes = require('./routes');
let port = process.env.PORT || 8000;

app.listen(port);

app.use('/api/v1', routes)

console.log('RESTful API server started on: ' + port);