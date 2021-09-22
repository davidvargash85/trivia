import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { resetAction, useTrivia } from '../../Context/trivia-context';

import './LinkButton.css';

const DISPLAY_NAME = 'trivia-link-button';

const LinkButton = ({ text, className, to, onClick }) => {
  const history = useHistory();
  const { dispatch } = useTrivia();
  const onClickHandler = () => {
    if (onClick && typeof (onClick) === 'function') {
      onClick();
    }
    dispatch(resetAction());
    history.push(to);
  };
  return (
    <div className={`${DISPLAY_NAME} ${className}`} onClick={onClickHandler}>
      {text}
    </div>
  );
};

LinkButton.defaultProps = {
  className: '',
  onClick: undefined
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default LinkButton;
