import React from 'react';
import { useTrivia } from '../../Context/trivia-context';
import ResultItem from './ResultItem';

import './ResultListContainer.css';

const DISPLAY_NAME = 'result-list-container';

const ResultListContainer = () => {
  const {
    state: { evals, questions }
  } = useTrivia();
  return (
    <div className={DISPLAY_NAME}>
      {questions.map((q, i) => {
        const e = evals[i];
        return <ResultItem text={q.question} value={e} key={`result-${i}`} />;
      })}
    </div>
  );
};

export default ResultListContainer;
