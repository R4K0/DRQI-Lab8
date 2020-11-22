import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
    render(){
        /*
        For Each JSON object in movies, we return a Movie component that adds the JSON Movie object into data prop.
        This could probably be done via a forEach loop as well!
        */

        // LAB 6: I've added the key param as the imdbID because react instructed me to - It worked without it, but I guess it's better to supply it. I supplied imdbID as the key as it should be unique
        return this.props.movies.map( (movie) => {
            return <Movie data={movie} key={movie._id}></Movie>
        })
    }
}

export default Movies;