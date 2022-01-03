import React, { Component } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';



class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
           reviews: []
        };
    } 

    addReview = async(inputText) => {
        try{
            console.log(inputText);
            let review = {text: `${inputText}` }
            let response = await axios.post(`http://localhost:5000/api/wines/61bb5cbd35a99f2e78787aa4/reviews`, review)
            console.log(response)
            this.state.reviews.push(response)
            this.setState({
                reviews: this.state.reviews
            })
        }
        catch(err){
            console.log("Error posting new review", err.response.data)
        }
    }

    render(){
        return(
            <div className="reviews-container">
                <ReviewForm addReview = {this.addReview} />
            </div>
        )
      }
}

export default Reviews;