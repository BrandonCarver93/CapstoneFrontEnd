import React, { Component } from 'react';
import axios from 'axios';
import AddReviewForm from './ReviewForm';



class Reviews extends Component {
    constructor(props){
        super(props);
        this.state = {
            allReviews: []
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
        console.log(this.props.wineoId)
        try{
            let response = await axios.get(`http://localhost:5000/api/wine/${this.props.wineId}`)
            console.log(response.data)
            let theReviews = response.data // .items ?
            this.setState({
                allReviews: theReviews
            })
        }
        catch(err){
            console.log("Error getting reviews", err)
          }
    }

    addReview = async(inputReview) => {
        try{
            let addedReview = await axios.post(`http://localhost:5000/api/wine/${this.props.wineId}`, inputReview)
            console.log(addedReview)
            this.state.allReviews.push(addedReview)
            this.setState({
                allReviews: this.state.allReviews
            })
        }
        catch(err){
            console.log("Error posting new review", err)
        }
    }

    // displayComments = () => {
    //     return (
    //         <div>
    //             {this.props.theVideoId.map}
    //         </div>
    //     )
    // }

    // likeComment  = () => {
    //     return (  );
    // }
     
    // addReply  = () => {
    //     return (  );
    // }
    
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    // }
    


    render(){
        console.log(this.state.allReviews)
        const allReviews = this.state.allReviews //create map function for allComments to render with html tags and style
        return(
            <div className="reviews-container">
                <h2 className="reviews-heading">Reviews</h2>
                <AddReviewForm theAddReview = {this.addReview} wineId = {this.props.wineId}/>
                {/* <div>
                    {this.displayComments()}
                </div> */}
            </div>
        )
      }
}

export default Reviews;