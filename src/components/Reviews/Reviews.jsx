import React, { Component } from "react";
import ReviewForm from "./ReviewForm";

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-container">
        <ReviewForm wineId={this.props.id._id} />
      </div>
    );
  }
}

export default Reviews;
