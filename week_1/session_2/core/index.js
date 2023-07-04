let express = require('express');
const cors = require('cors');
let bodyParser = require('body-parser')
const db = require('./utils/db');
let app = express();
const routes = require('./routes');
let port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.listen(port);

app.use('/api/v1', routes)

console.log('RESTful API server started on: ' + port);