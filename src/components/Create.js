import Axios from 'axios';
import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

class Create extends React.Component {

    // Create a new constructor so we can bind onChange callback to this instance of a Create class
    constructor(props) {
        //React documentation says that we always should call super and pass our props to it in case we are extending Component
        super(props)

        // Bind those methods to this instance of a class so "this" keyword is available.
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // This will be fired whenever Form detects that it has been changed.
    onChange(event) {
        //The reason why this is so versitale, is that I don't need to create a new onChangeXXXX method every form input I create.
        //I simply create the form input, give it a Name property, and based on that name property I am able to set the proper key (or index?) to the new value.
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async onSubmit(event) {
        //We're preventing default behaviour because it refreshes the whole page, we don't want that!
        event.preventDefault()

        try {
            // Send out a request to our backend server
            await Axios.post("http://localhost:4000/api/movies", {
                movie: {
                    title: this.state.Title,
                    year: this.state.Date,
                    poster: this.state.Poster
                }
            });

            // reset our error if we had one before
            this.setState({
                error: undefined
            })
        } catch(err) {
            //If we errored, the server should send us a message why. set our state so we can display an error message
            this.setState({
                error: err.response?.data?.message ? err.response.data.message : "Generic message"
            })
        }

    }

    // I added one onChange event for every single input just so this keeps the code complexity low and it makes it so scalability is much better!
    // Whenever you add a new form input now, you don't need to create a seperate onChange event for it, which makes it really handy and fast

    //React Bootstrap also has built-in clientside form validity checking - try putting in a string into the Release Date and then submit the form! :)
    render() {
        return (
            <div>
                {/* This will display an error if "error" key is in our state */}
                { this.state?.error && <div role="alert" className="alert alert-danger">{this.state?.error}</div> || undefined}

                <Form onChange={this.onChange} onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Movie Title</Form.Label>

                        <Form.Control required name="Title" placeholder="Spider Man 3"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Release Date</Form.Label>

                        <Form.Control required placeholder="2020" name="Date" type="number"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Poster URL</Form.Label>

                        <Form.Control required name="Poster" ></Form.Control>
                    </Form.Group>

                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Create;