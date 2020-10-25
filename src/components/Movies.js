import React from 'react';
import Movie from './Movie';

class Movies extends React.Component{
    render(){
        return this.props.movies.map( (movie) => {
            return <Movie data={movie}></Movie>
        })
    }
}

export default Movies;