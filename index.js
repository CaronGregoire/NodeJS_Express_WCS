const express = require('express');

const app = express();
const movies = require("./movies");
const port = 3000 ;

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});

app.get("/api/movies", (req, res) => {
    res.status(200).json(movies);
});

app.get(`/api/movies/:id`, (req, res) => {
  const movie = movies.find(movie => movie.id === parseInt(req.params.id));
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).send("Movie not found");
    }
});

app.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened')
    } else {
        console.log(`Server is listening on ${port}`)
    }
}); 

