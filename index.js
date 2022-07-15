'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();


//middlewares-------------
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//routes------------------
app.use('/api', userRoutes.routes);

//server running----------
app.listen(config.port, () => {
    console.log('app listening on url http://localhost:' + config.port )
});

