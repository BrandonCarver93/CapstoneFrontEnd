import React, { Component } from 'react';

class AddReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            wineId: this.props.wineId,
            text: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addReview(this.state);
    }

    render(){
        return(
            <div>
                <form>
                    <textarea className="form-control review-textarea" rows="2" type="text" name="text" placeholder="Leave a Review..." onChange={this.handleChange} value={this.state.text} />
                    <button className="review-button" type="submit">Review</button>
                </form>
            </div>
        )
    }
}

export default AddReviewForm;