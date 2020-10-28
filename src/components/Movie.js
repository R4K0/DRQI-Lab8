import React from 'react';
import {Card} from 'react-bootstrap'

class Movie extends React.Component{
    render(){
        return(
            <Card>
                {/* Create a header, then grab the title from our props */}
                <Card.Header>
                    {this.props.data.Title}
                </Card.Header>

                {/* Create the card body with its informaltion filled in from out properties */}
                <Card.Body>
                    <div>
                        <h5>
                            {this.props.data.Year}
                        </h5>

                        <a href={ "https://www.imdb.com/title/" + this.props.data.imdbID}>
                            <img src={this.props.data.Poster} alt={"Poster of " + this.props.data.Title} />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Movie;