import React, { Component } from 'react';
import WineRating from '../Rating/Rating';

class ReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        this.props.addReview(this.state.text);
    }

    render(){
        return(
            <div style={{ padding: 13 }}>
                <center><WineRating /></center>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="form-control review-textarea" rows="2" type="text" name="text" placeholder="Leave a Review..." 
                    onChange={this.handleChange} value={this.state.text} />
                    <button className="review-button" type="submit">Submit Review</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;