const database = require('./database.js') //Run our database stuff
const requestIP = require('request-ip')

//Import express
const express = require(`express`)
//Create an instance of an express app
const app = express()

//bodyparser middleware, so any incoming requests extracts and PARSES the body so it's available as req.body
const bodyParser = require(`body-parser`)
const cors = require('cors');

// use this for the IP logging feature :)
app.use(requestIP.mw());

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
app.get(`/api/movies`, async (req, res) => {
    try{
        const data = await database.MoviesModel.find();

        // Send found data as json and let the client know that all is right via status code 200 
        res.status(200).json(data);
    } catch( err ){
        res.status(500).json( {
            message: "Something went wrong!"
        });
    }
})

//drop all the movies by a given ip address! (when testing locally ip is always localhost or ::1 for ipv6 addresses)
app.get('/api/movies/drop', async (req, res) => {
    console.log(`request received by ${req.clientIp}`)

    // Delete data if client requests it!
    try {
        var data = await database.MoviesModel.deleteMany({
            AddedBy: req.clientIp
        })

        console.log(data);
        res.status(200);
    } catch (err) {
        console.log(err);
    }
})

//endpoint for adding movies to the db
app.post('/api/movies', async (req, res) => {
    //Body parser handily lets us get the movies from .body parameter
    const movie = req.body.movie;

    if (!movie){
        // If something is wonky, then reply back with an error message.
        res.status(400).json({
            message: "Movie not specified!"
        });

        return;
    }

    try {
        await database.MoviesModel.create( {
            Title: movie.title,
            Year: movie.year,
            Poster: movie.poster,
            AddedBy: req.clientIp || 'localhost'
        } )

        res.status(200);
    } catch (err) {
        console.log(err);
        res.json({
            error: `${err._message}`
        }).status(500);
    }
})

//endpoint for removing movies by id
app.post('/api/movies/:id', async (req, res) => {
    const id = req.params.id;

    console.log(id)
    // if ID wasn't passed for some reason, then abort
    if (!id) { return }

    try {
        // remove and delete by id
        await database.MoviesModel.findByIdAndDelete(id);

        res.sendStatus(200);
    } catch (err) {
        console.log( err );
        res.sendStatus(500);
    }
})

app.listen(4000, ()=>{
    console.log("BACKEND: Listening on port 4000!");
})