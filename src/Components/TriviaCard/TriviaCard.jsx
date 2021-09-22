import React from 'react';
import PropTypes from 'prop-types';
import './TriviaCard.css';

const DISPLAY_NAME = 'trivia_card';

const TriviaCard = ({
  title,
  question
}) => {
  return (
    <div className={DISPLAY_NAME}>
      <section className={`${DISPLAY_NAME}__title ${DISPLAY_NAME}__section`}>
        <h1>{title}</h1>
      </section>
      <section className={`${DISPLAY_NAME}__question ${DISPLAY_NAME}__section`}>
        <p>{question}</p>
      </section>
    </div>
  );
};

TriviaCard.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};

export default TriviaCard;
