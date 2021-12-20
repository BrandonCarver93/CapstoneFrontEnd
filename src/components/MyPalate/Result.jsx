import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        Based on your answers we recommend {props.quizResult}! as your preferred wine.
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;