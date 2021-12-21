import React, { Component } from 'react';

class AddReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoId: this.props.wineId,
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
        this.props.theAddComment(this.state);
    }

    render(){
        return(
            <div>
                <form>
                    <textarea className="form-control comment-textarea" rows="5" type="text" name="text" placeholder="Write a Comment..." onChange={this.handleChange} value={this.state.text}/>
                    <button className="comment-button" type="submit">Review</button>
                </form>
            </div>
        )
    }
}

export default AddReviewForm