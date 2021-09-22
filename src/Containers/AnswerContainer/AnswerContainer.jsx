import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStop } from '@fortawesome/free-solid-svg-icons';
import './AnswerContainer.css';

const DISPLAY_NAME = 'answer-container';

const AnswerIcon = ({ value, onClick, responded }) => {
  const onClickHandler = () => {
    if (!responded) {
      onClick(value);
    }
  };
  return (
    <div
      className={`${DISPLAY_NAME}__options-${value.toString()} ${DISPLAY_NAME}__icon ${
        responded && 'responded'
      }`}
      onClick={onClickHandler}
    >
      <FontAwesomeIcon icon={value ? faCheck : faStop} />
    </div>
  );
};

AnswerIcon.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  responded: PropTypes.bool
};

AnswerIcon.defaultProps = {
  responded: false
};

const AnswerContainer = ({ answer, answerClickHandler }) => {
  const displayText = answer !== -1 ? 'Your answer was' : 'Select your answer';
  const getIconsByAnswer = () => {
    const icons = [];
    const responded = answer !== undefined && answer !== -1;
    if (responded) {
      icons.push(
        <AnswerIcon
          value={answer}
          onClick={answerClickHandler}
          responded
          key="t-icon"
        />
      );
    } else {
      icons.push(
        <AnswerIcon value={true} onClick={answerClickHandler} key="t-icon" />
      );
      icons.push(
        <AnswerIcon value={false} onClick={answerClickHandler} key="f-icon" />
      );
    }
    return icons;
  };
  return (
    <div className={DISPLAY_NAME}>
      <div className={`${DISPLAY_NAME}__intro`}>{displayText}</div>
      <div className={`${DISPLAY_NAME}__options`}>{getIconsByAnswer()}</div>
    </div>
  );
};

AnswerContainer.propTypes = {
  answer: PropTypes.number.isRequired,
  answerClickHandler: PropTypes.func.isRequired
};

export default AnswerContainer;
