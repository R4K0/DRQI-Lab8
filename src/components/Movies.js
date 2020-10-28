import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
    render(){
        /*
        For Each JSON object in movies, we return a Movie component that adds the JSON Movie object into data prop.
        This could probably be done via a forEach loop as well!
        */
        return this.props.movies.map( (movie) => {
            return <Movie data={movie}></Movie>
        })
    }
}

export default Movies;