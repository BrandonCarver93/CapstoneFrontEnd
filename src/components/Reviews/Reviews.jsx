import React, { Component } from 'react';
import axios from 'axios';
import AddReviewForm from './ReviewForm';



class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
           reviews: [],
        };
    }

    componentDidMount(){
       this.wineReviews();
    }

    componentDidUpdate(prevProps){
        if(this.props.wineId !== prevProps.wineId)
        this.wineReviews();
    }

      wineReviews = async() => {
        console.log(this.props.reviews)
        try{
            let response = await axios.get(`http://localhost:5000/api/wines/${this.props.wineId}`)
            console.log(response.data.reviews)
            this.setState({
                reviews: response.data
            })
        }
        catch(err){
            console.log("Error getting reviews", err)
          }
    }  

    addReview = async(inputReview) => {
        try{
            let response = await axios.post(`http://localhost:5000/api/wines/${this.props.wineId}/reviews`, inputReview)
            console.log(response)
            this.state.reviews.push(response)
            this.setState({
                reviews: this.state.reviews
            })
        }
        catch(err){
            console.log("Error posting new review", err)
        }
    }

    render(){
        console.log(this.state.reviews)
        const reviews = this.state.reviews 
        return(
            <div className="reviews-container">
                <AddReviewForm theAddReview = {this.addReview} wineId = {this.props.wineId}/>
            </div>
        )
      }
}

export default Reviews;