const express = require('express');
const authRoutes = require('./app/routes/authRoutes');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/auth', authRoutes);

//module export
module.exports = app;