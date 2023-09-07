const express = require('express');
const tasksRouter = require('./routes/tasks');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
