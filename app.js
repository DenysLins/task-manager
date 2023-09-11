const express = require('express');

const app = express();
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const connectDB = require('./db/connect');

require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);

app.use(notFound);

const start = async () => {
  try {
    const port = process.env.PORT || 3000;
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
