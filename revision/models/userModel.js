// userModel.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('revision', 'postgres', 'aboud', {
    host: 'localhost',
    dialect: 'postgres',
});

// Define the User model
const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    // Add more fields as needed
});

// Create the User table in the database (if it doesn't exist)
User.sync();

module.exports = User;
