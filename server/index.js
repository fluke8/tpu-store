require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));