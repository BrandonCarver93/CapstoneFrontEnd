import React, { Component } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import axios from "axios";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      text: "",
      rates: 0,
      ratingValue: 0,
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    try {
      let review = {
        text: `${this.state.text}`,
        rating: this.state.ratingValue,
      };
      let response = await axios.post(
        `http://localhost:5000/api/wines/${this.props.wineId}/reviews`,
        review
      );
        this.state.reviews.push(response)
        console.log(response);
        return this.setState({
          reviews: this.state.reviews,
          ratingValue: 0,
        });
      
    } catch (err) {
      console.log(err, "Error posting new review", err?.response?.data);
    }
  };

  acceptRating = (rates) => {
    this.setState({ rates });
  };
  render() {
    return (
      <div style={{ padding: 13 }}>
        <center>
          <div style={{ display: "block", padding: 1 }}>
            <Box component="fieldset" mb={1} borderColor="transparent">
              <Rating
                name="Rating Label"
                value={this.state.ratingValue}
                onChange={(event, newValue) => {
                  this.setState({ ratingValue: newValue });
                }}
              />
            </Box>
          </div>
        </center>
        <form onSubmit={this.handleSubmit}>
          <textarea
            className="form-control review-textarea"
            rows="2"
            type="text"
            name="text"
            placeholder="Leave a Review..."
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="review-button" type="submit">
            Submit Review
          </button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
