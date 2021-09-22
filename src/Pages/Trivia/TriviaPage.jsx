import React from 'react';
import { TriviaCardContainer } from '../../Containers';
import { Link } from 'react-router-dom';
import './Trivia.css';

const DISPLAY_NAME = 'trivia_app__trivia_page';

const TriviaPage = () => {
  return (
    <div className={DISPLAY_NAME}>
      <TriviaCardContainer />
      <Link to="/results">
          <div className={`${DISPLAY_NAME}-footer-cta intro-text`}>
            results
          </div>
        </Link>
    </div>
  );
};

export default TriviaPage;
