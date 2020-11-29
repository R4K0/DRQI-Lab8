import Axios from 'axios';
import React, {ReactDOM} from 'react';
import {Button, Card} from 'react-bootstrap'

class Movie extends React.Component{

    constructor(props){
        super(props);

        // Bind it, so 'this' keyword is available
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    async DeleteMovie(ID){
        // Send a request to our backend server to remove a movie with this ID
        try {
            console.log("I got here")
            await Axios.post(`http://localhost:4000/api/movies/${ID}`)

            // Don't really know how to make the component unmount itself, so I'll leave that for another day
            // Ignore above comment, I have got it to work 29th/11th :)

            this.props.refresh(); // This method is the parents method - It gets passed from Read component, to Movies component, finally down to this child, where we call it.
        } catch (err) {
            console.log(err)
        }
    }

    render(){
        return(
            <Card>
                {/* Create a header, then grab the title from our props */}
                <Card.Header>
                    <div style={{float: 'right', whiteSpace: "nowrap"}}>
                        <Button className="btn btn-danger float-right" style={{marginLeft: '8px'}} onClick={() => {this.DeleteMovie(this.props.data._id)}}>
                            <small>Delete</small>
                        </Button>

                        <Card.Text className="float-right" style={{verticalAlign: 'middle'}}>
                            {this.props.data._id}
                        </Card.Text>
                    </div>


                    <h5>{this.props.data.Title}</h5>
                </Card.Header>

                {/* Create the card body with its informaltion filled in from out properties */}
                <Card.Body>
                    <div>
                        <h5>
                            {this.props.data.Year}
                        </h5>

                        <a href={ "https://www.imdb.com/title/" + this.props.data.imdbID}>
                            <img src={this.props.data.Poster} alt={"Poster of " + this.props.data.Title} width='400px' />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Movie;