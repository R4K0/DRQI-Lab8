import React from 'react';
import {Card} from 'react-bootstrap'

class Movie extends React.Component{
    render(){
        return(
            <Card>
                <Card.Header>
                    {this.props.data.Title}
                </Card.Header>

                <Card.Body>
                    <div>
                        <h5>
                            {this.props.data.Year}
                        </h5>

                        <a href={ "https://www.imdb.com/title/" + this.props.data.imdbID}>
                            <img src={this.props.data.Poster} />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Movie;