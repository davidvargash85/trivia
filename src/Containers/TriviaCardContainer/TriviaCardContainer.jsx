import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchQuestions from '../../api';
import { useTrivia, answerAction, initAction, FORWARD, paginationAction } from '../../Context/trivia-context';
import { TriviaCard, TriviaCardLoading } from '../../Components';
import PaginationContainer from '../PaginationContainer/PaginationContainer';
import AnswerContainer from '../AnswerContainer/AnswerContainer';
import './TriviaCardContainer.css';

const DISPLAY_NAME = 'trivia-card-container';

const TriviaCardContainer = () => {
  const {
    dispatch,
    state: { currentAnswer, currentQuestion, index, total }
  } = useTrivia();
  const history = useHistory();
  useEffect(() => {
    async function initApp () {
      if (!currentQuestion) {
        const questions = await fetchQuestions();
        dispatch(initAction(questions));
      }
    }
    initApp();
  }, [dispatch, currentQuestion]);
  const answerClickHandler = (value) => {
    dispatch(answerAction(index, value));
    dispatch(paginationAction(FORWARD));
    if (index === total - 1) {
      history.push('/results');
    }
  };
  return currentQuestion
    ? (
    <div className={DISPLAY_NAME}>
      <TriviaCard
        question={currentQuestion.question}
        title={currentQuestion.category}
        current={index + 1}
        total={total}
      />
      <AnswerContainer answer={currentAnswer} answerClickHandler={answerClickHandler} />
      <PaginationContainer />
    </div>
      )
    : (
    <TriviaCardLoading />
      );
};

export default TriviaCardContainer;
