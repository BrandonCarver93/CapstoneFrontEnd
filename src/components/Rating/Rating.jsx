import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function WineRating() {

const [ratingValue, setRatingValue] = React.useState(0);

return (
	<div style={{ display: 'block', padding: 1 }}>
	
	<Box component="fieldset" mb={1} borderColor="transparent">
		<Rating
		name="Rating Label"
		value={ratingValue}
		onChange={(event, newValue) => {
			setRatingValue(newValue);
		}}
		/>
	</Box>
	</div>
);
}
