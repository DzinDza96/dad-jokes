const express = require('express');
const router = express.Router();
const { getRandomJoke, addJoke, getAllJokes, updateJoke, deleteJoke } = require('../controllers/jokesController');

// GET /api/jokes/random - Retrieve a random joke
router.get('/random', getRandomJoke);

// POST /api/jokes - Add a new joke
router.post('/', addJoke);

// GET /api/jokes - Retrieve all jokes
router.get('/', getAllJokes);

// PUT /api/jokes/:id - Update a joke by ID
router.put('/:id', updateJoke);

// DELETE /api/jokes/:id - Delete a joke by ID
router.delete('/:id', deleteJoke);

module.exports = router;
