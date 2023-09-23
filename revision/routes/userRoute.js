// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import the User model

// Create a new user
router.post('/', async (req, res) => {
    try {
        // Create a new user based on the request body
        const newUser = await User.create(req.body);

        // Respond with the newly created user
        res.status(201).json(newUser);
    } catch (error) {
        // Handle any errors that occur during the creation process
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        // Query the database for all users
        const users = await User.findAll();

        // Respond with the users
        res.status(200).json(users);
    } catch (error) {
        // Handle any errors that occur during the query process
        res.status(500).json({ error: error.message });
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    try {
        // Find the user by id
        const user = await User.findByPk(req.params.id);

        // Update the user with the request body
        await user.update(req.body);

        // Respond with the updated user
        res.status(200).json(user);
    } catch (error) {
        // Handle any errors that occur during the update process
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
