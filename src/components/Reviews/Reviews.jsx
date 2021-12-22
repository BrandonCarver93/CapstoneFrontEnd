import React, { Component } from 'react';
import axios from 'axios';
import ReviewForm from './ReviewForm';
import WineRating from '../Rating/Rating';



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
            let response = await axios.get(`http://localhost:5000/api/wines/61b90d8d286da17e3828e4b3`)
            this.setState({
                reviews: response.data.reviews
            })
        }
        catch(err){
            console.log("Error getting reviews", err)
          }
    }  

    addReview = async(inputReview) => {
        try{
            let response = await axios.post(`http://localhost:5000/api/wines/61b90d8d286da17e3828e4b3/reviews`, {inputReview})
            console.log(response)
            this.state.reviews.push(response)
            this.setState({
                reviews: this.state._id.reviews
            })
        }
        catch(err){
            console.log("Error posting new review", err)
        }
    }

    render(){
        console.log(this.state.reviews)
        return(
            <div className="reviews-container">
                <WineRating />
                <ReviewForm addReview = {this.addReview} wineId = {this.props.wineId}/>
            </div>
        )
      }
}

export default Reviews;