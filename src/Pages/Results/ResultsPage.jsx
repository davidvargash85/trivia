import React from 'react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';
import { LinkButton, Score } from '../../Components';
import { ResultListContainer } from '../../Containers';
import constants from '../../utils/constants';

const DISPLAY_NAME = 'trivia-app-results-page';

const ResultsPage = () => {
  return (
    <div className={DISPLAY_NAME}>
      <Score />
      <ResultListContainer />
      <Link to="/trivia">{constants.results.back}</Link>
      <LinkButton text={constants.results.tryAgain} to="/trivia" />
    </div>
  );
};

export default ResultsPage;
