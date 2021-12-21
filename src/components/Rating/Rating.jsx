import React from 'react';
import Rating from '@material-ui/lab/Rating';

export default function WineRating() {

const [ratingValue, setRatingValue] = React.useState(0);

return (
	<div style={{ display: 'block', padding: 5 }}>
		<Rating
		name="Rating Label"
		value={ratingValue}
		onChange={(event, newValue) => {
			setRatingValue(newValue);
		}}
		/>
	</div>
);
}
