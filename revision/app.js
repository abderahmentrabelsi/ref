// app.js

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Pool } = require('pg');
const { sequelize } = require('./models/userModel'); // Import the Sequelize instance and User model
const usersRouter = require('./routes/userRoute');

const cors = require('cors');

const port = 4000;

var indexRouter = require('./routes/index');

var app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'revision',
    password: 'aboud',
    port: 5432,
});

pool.connect((err, client, done) => {
    if (err) {
        console.error('Failed to connect to the database:', err);
    } else {
        console.log('Connected to the database successfully');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
