const mongoose = require("mongoose")
const config = require(`../config/database.json`)
mongoose.connect( `mongodb+srv://${config.username}:${config.password}@drqi-lab7.sszmu.mongodb.net/moviesdb?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true} )

mongoose.connection.once( 'open', () => {
    console.log( `Connected to DB!` )
})

// create a new schema, I haven't implemented all fields just yet into the form. Next lab should have it done
var MoviesSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Year: Number,
    ImdbID: Number,
    Poster: String,
    AddedBy: String, // IP
    Type: {
        type: String,
        enum: ['Movie', 'Show', 'Special'],
        default: 'Movie'
    }
});

// create a model based on the schema
var MoviesModel = mongoose.model( `Movies`, MoviesSchema );

// Export the model so I can use it outside of this file
module.exports = {
    MoviesModel
}