const db = require('../models/db');

async function getRandomJoke(req, res) {
  try {
    const pool = await db();
    const result = await pool.request().query('SELECT * FROM jokes ORDER BY NEWID()');
    res.json(result.recordset[0]);
  } catch (error) {
    console.error('Error fetching random joke:', error);
    res.status(500).json({ error: 'Failed to fetch random joke' });
  }
}

async function getAllJokes(req, res) {
  try {
    const pool = await db();
    const result = await pool.request().query('SELECT * FROM jokes');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error fetching jokes:', error);
    res.status(500).json({ error: 'Failed to fetch jokes' });
  }
}

async function addJoke(req, res) {
  const { question, answer, rating } = req.body;

  try {
    const pool = await db();
    await pool.request().query(`
      INSERT INTO jokes (question, answer, rating) 
      VALUES ('${question}', '${answer}', ${rating})
    `);

    res.status(201).json({ message: 'Joke added successfully' });
  } catch (error) {
    console.error('Error adding joke:', error);
    res.status(500).json({ error: 'Failed to add joke' });
  }
}

async function updateJoke(req, res) {
  const jokeId = req.params.id;
  const { question, answer, rating } = req.body;

  try {
    const pool = await db();
    await pool.request().query(`
      UPDATE jokes 
      SET question = '${question}', answer = '${answer}', rating = ${rating} 
      WHERE id = ${jokeId}
    `);

    res.json({ message: `Joke with ID ${jokeId} updated successfully` });
  } catch (error) {
    console.error('Error updating joke:', error);
    res.status(500).json({ error: 'Failed to update joke' });
  }
}

async function deleteJoke(req, res) {
  const jokeId = req.params.id;

  try {
    const pool = await db();
    await pool.request().query(`
      DELETE FROM jokes 
      WHERE id = ${jokeId}
    `);

    res.json({ message: `Joke with ID ${jokeId} deleted successfully` });
  } catch (error) {
    console.error('Error deleting joke:', error);
    res.status(500).json({ error: 'Failed to delete joke' });
  }
}

module.exports = {
  getRandomJoke,
  addJoke,
  getAllJokes,
  updateJoke,
  deleteJoke,
};
