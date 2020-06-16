const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const favicon = require('serve-favicon');
const router = require('./router');
const { notFound, errorHandler } = require('./middleware/utils');
require('dotenv').config();
const winston = require('./middleware/winston');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/assets/images/favicon.ico')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));

app.use(router);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
