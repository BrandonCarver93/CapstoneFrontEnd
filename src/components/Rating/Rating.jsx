import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const WineRating = ({ ratingValue }) => {
  return (
    <div>
      <Box align="left" mb={1} borderColor="transparent">
        <Rating value={ratingValue} name="rating" readOnly={true} />
      </Box>
    </div>
  );
};

export default WineRating;
