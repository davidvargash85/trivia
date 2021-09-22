import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import './TriviaCardLoading.css';

const DISPLAY_NAME = 'trivia_card-loading';

const TriviaCardLoading = () => {
  return (
    <div className={DISPLAY_NAME}>
      <section className={`${DISPLAY_NAME}__title ${DISPLAY_NAME}__section`}>
        <p>loading questions ...</p>
      </section>
      <section className={`${DISPLAY_NAME}__question ${DISPLAY_NAME}__section`}>
        <FontAwesomeIcon icon={faHourglass} className={`${DISPLAY_NAME}__hour-glass`} />
      </section>
    </div>
  );
};

export default TriviaCardLoading;
