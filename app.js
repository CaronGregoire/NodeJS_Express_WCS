const connection = require("./db-config")
const express = require("express");
const app = express();

const port = process.env.PORT ?? 3000;

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
  } else {
    console.log('connected to database with threadId :  ' + connection.threadId);
  }
});

app.get('/api/movies', (req, res) => {
connection.promise().query('SELECT * FROM movies')
  .then((result) => {
    console.error(err);
    res.status(500).send('Error database');
  }) .catch((err) => {
    res.status(200).json(result);
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
