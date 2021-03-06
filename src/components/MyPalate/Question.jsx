import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <h3 className='question'><center>{props.content}</center></h3>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;