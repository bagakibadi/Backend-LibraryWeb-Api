require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.DB_PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const Router = require('./src/routers/index.js');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/api/v1/',Router);
app.use('/uploads', express.static('./uploads'));
app.listen(port, ()=> {
    console.log(`App Listen Port ${port}`);
});