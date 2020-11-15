//Import express
const express = require(`express`)
//Create an instance of an express app
const app = express()

//bodyparser middleware, so any incoming requests extracts and PARSES the body so it's available as req.body
const bodyParser = require(`body-parser`)
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());
// We need to let CORS know what we allow calls from localhost!
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    next();
})

// Return our movies!
app.get(`/api/movies`, (req, res) => {
    res.status(200).json({
        movies: [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "World War Z",
                "Year": "2013",
                "imdbID": "tt0816711",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
            },
            {
                "Title": "War of the Worlds",
                "Year": "2005",
                "imdbID": "tt0407304",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
            }
        ]
    })
})

app.post('/api/movies', (req, res) => {
    //Body parser handily lets us get the movies from .body parameter
    const movie = req.body.movie;

    if (!movie){
        // If something is wonky, then reply back with an error message.
        res.status(400).json({
            message: "Movie not specified!"
        });

        return;
    }

    // let's log what we got!
    console.log(`Title: ${movie.title}, Year: ${movie.year}, Poster: ${movie.poster}`)

    // We always should let the requeter know that it was a success!
    res.status(200).send();
})

app.listen(4000, ()=>{
    console.log("BACKEND: Listening on port 4000!");
})