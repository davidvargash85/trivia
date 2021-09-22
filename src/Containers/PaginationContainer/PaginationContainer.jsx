import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFastBackward,
  faStepBackward,
  faStepForward,
  faFastForward
} from '@fortawesome/free-solid-svg-icons';
import {
  paginationAction,
  useTrivia,
  FAST_BACKWARD,
  BACKWARD,
  FORWARD,
  FAST_FORWARD
} from '../../Context/trivia-context';
import './PaginationContainer.css';

const DISPLAY_NAME = 'pagination_container';

const PaginationContainer = () => {
  const {
    dispatch,
    state: { index, total }
  } = useTrivia();

  const paginationClickHandler = (actionType) => {
    dispatch(paginationAction(actionType));
  };

  return (
    <div className={DISPLAY_NAME}>
      <div
        className={`${DISPLAY_NAME}__icon`}
        onClick={() => paginationClickHandler(FAST_BACKWARD)}
      >
        <FontAwesomeIcon icon={faFastBackward} />
      </div>
      <div
        className={`${DISPLAY_NAME}__icon`}
        onClick={() => paginationClickHandler(BACKWARD)}
      >
        <FontAwesomeIcon icon={faStepBackward} />
      </div>
      <div className={`${DISPLAY_NAME}__counter ${DISPLAY_NAME}__current-page`}>
        <span className={`${DISPLAY_NAME}__counter-value`}>{index + 1}</span>{' '}
        out of <span className={`${DISPLAY_NAME}__counter-value`}>{total}</span>
      </div>
      <div
        className={`${DISPLAY_NAME}__icon`}
        onClick={() => paginationClickHandler(FORWARD)}
      >
        <FontAwesomeIcon icon={faStepForward} />
      </div>
      <div
        className={`${DISPLAY_NAME}__icon`}
        onClick={() => paginationClickHandler(FAST_FORWARD)}
      >
        <FontAwesomeIcon icon={faFastForward} />
      </div>
    </div>
  );
};

export default PaginationContainer;
