import React from 'react';
import PropTypes from 'prop-types';
import { saveState } from '../api/state';
import { decodeHtml, evalResult } from './contex-utils';

const TriviaContext = React.createContext();

export const FAST_BACKWARD = 'fastBackward';
export const BACKWARD = 'backward';
export const FORWARD = 'forward';
export const FAST_FORWARD = 'fastForward';

// actions start
function resetAction () {
  return {
    type: 'reset'
  };
}
function initAction (questions) {
  return {
    type: 'init',
    payload: { questions }
  };
}
// answer could be: 1 for true, 0 for false, -1 for unanswered
function answerAction (index, answer) {
  return {
    type: 'answer',
    payload: { index, answer }
  };
}
function paginationAction (actionType) {
  return {
    type: actionType
  };
}
// actions end

// reducer start
const initialState = {
  questions: [],
  currentQuestion: undefined,
  currentAnswer: -1,
  index: 0,
  total: 0,
  started: false,
  answers: [],
  evals: [],
  correct: 0
};

function triviaReducer (state = initialState, action) {
  switch (action.type) {
    case 'init': {
      const {
        payload: { questions }
      } = action;
      // init answers
      const total = questions.length || 0;
      const answers = [];
      const evals = [];
      for (let i = 0; i < total; i++) {
        answers[i] = -1;
        questions[i].question = decodeHtml(questions[i].question);
        evals[i] = false;
      }
      return {
        ...state,
        questions,
        currentQuestion: questions[0],
        currentAnswer: -1,
        index: 0,
        total: total,
        answers,
        evals
      };
    }
    case 'fastBackward': {
      const { answers, questions } = state;
      const newIndex = 0;
      return {
        ...state,
        currentQuestion: questions[newIndex],
        currentAnswer: answers[newIndex],
        index: newIndex
      };
    }
    case 'backward': {
      const { answers, questions, index } = state;
      const newIndex = index > 0 ? index - 1 : index;
      return {
        ...state,
        currentQuestion: questions[newIndex],
        currentAnswer: answers[newIndex],
        index: newIndex
      };
    }
    case 'forward': {
      const { answers, questions, index, total } = state;
      const newIndex = index < total - 1 ? index + 1 : index;
      return {
        ...state,
        currentQuestion: questions[newIndex],
        currentAnswer: answers[newIndex],
        index: newIndex
      };
    }
    case 'fastForward': {
      const { answers, questions, total } = state;
      const newIndex = total - 1;
      return {
        ...state,
        currentQuestion: questions[newIndex],
        currentAnswer: answers[newIndex],
        index: newIndex
      };
    }
    case 'answer': {
      const {
        payload: { index, answer }
      } = action;
      const { answers, questions, evals, correct } = state;
      const answersCopy = [...answers];
      answersCopy[index] = answer;
      const evalsCopy = [...evals];
      const result = evalResult(questions[index], answer);
      evalsCopy[index] = result;
      const newState = {
        ...state,
        answers: answersCopy,
        currentAnswer: answer,
        evals: evalsCopy,
        correct: result ? correct + 1 : correct
      };
      saveState(newState);
      return newState;
    }
    case 'reset': {
      return {
        ...initialState
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// reducer end

// provider
function TriviaProvider ({ children }) {
  const [state, dispatch] = React.useReducer(triviaReducer, initialState);
  const value = { state, dispatch };
  return (
    <TriviaContext.Provider value={value}>{children}</TriviaContext.Provider>
  );
}

TriviaProvider.propTypes = {
  children: PropTypes.string.isRequired
};

// hook
function useTrivia () {
  const context = React.useContext(TriviaContext);
  if (context === undefined) {
    throw new Error('useTrivia must be used within a TriviaProvider');
  }
  return context;
}

export {
  answerAction,
  TriviaProvider,
  useTrivia,
  initAction,
  paginationAction,
  resetAction
};
