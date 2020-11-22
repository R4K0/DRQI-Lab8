import Axios from 'axios';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import Movies from './Movies';

class Read extends React.Component {

    // Initial empty data-set
    state = {
        movies: [],
        loading: false
    }

    // Instead of using .then and .catch with promises, I decided to write this function asynchronously 
    async componentDidMount(){
        try{
            //We will be executing a get request, set the loading state to true
            this.setState({
                loading: true
            })
            // Execute a get request, the AWAIT keyword waits until the promise (which Axios.get returns) is fullfilled or rejected if it's fullfilled, then it continues execution
            var Data = await Axios.get('http://localhost:4000/api/movies');

            // Dig apart the returned promise data and assign it to our movies state, as well as set the loading state to false
            this.setState({
                movies: Data.data || [],
                loading: false
            });

        } catch(err) {
            // If we errored then we're obviously no longer waiting for the get request to resolve, set loading to false.
            this.setState({
                loading: false
            })
        }
    }

    render(){
        // If state loading is true, then show loading spinner, but if our states movie property length is 0, then show a header "No movies to show", otherwise render Movies component
        return (
            <div>
                {this.state.loading === true && <Spinner variant="primary" animation="border" style={{position: "absolute", left: "50%", top: "50%"}}></Spinner> || this.state.movies.length === 0 && <h1>No movies to show</h1> || <Movies movies={this.state.movies}></Movies>}                
            </div>
        )
    }
}

export default Read;