import React from 'react';
import { useTrivia } from '../../Context/trivia-context';

import './Score.css';

const DISPLAY_NAME = 'trivia-app-score';

const Score = () => {
  const {
    state: { correct, total }
  } = useTrivia();
  return (
    <div className={DISPLAY_NAME}>
      <h1>You scored</h1>
      <h2>{correct}/{total}</h2>
    </div>
  );
};

export default Score;
