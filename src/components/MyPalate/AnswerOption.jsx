import React from 'react';
import PropTypes from 'prop-types';
import './AnswerOption.css';

function AnswerOption(props) {
  return (
    <div className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value= {props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="button" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </div>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;