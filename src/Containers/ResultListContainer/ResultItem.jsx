import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStop } from '@fortawesome/free-solid-svg-icons';

import './ResultItem.css';

const DISPLAY_NAME = 'result-item';

const ResultItem = ({ text, value = false }) => {
  return (
    <div className={DISPLAY_NAME}>
      <FontAwesomeIcon
        icon={value ? faCheck : faStop}
        className={`${DISPLAY_NAME}__icon ${DISPLAY_NAME}__icon-${value}`}
      />
      <p className={`${DISPLAY_NAME}__question`}>{text}</p>
    </div>
  );
};

ResultItem.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired
};

export default ResultItem;
