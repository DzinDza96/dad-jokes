require('dotenv').config();

const express = require('express');
const app = express();
const jokesRouter = require('./routes/jokes');

app.use(express.json());
app.use(express.static('frontend'));

app.use('/api/jokes', jokesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
