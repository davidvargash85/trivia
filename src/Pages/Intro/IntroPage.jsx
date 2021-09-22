import React from 'react';
import { LinkButton } from '../../Components';
import constants from '../../utils/constants';

import './IntroPage.css';

const DISPLAY_NAME = 'trivia-app-intro_page';

const IntroPage = () => {
  return (
    <div className={DISPLAY_NAME}>
      <h1>{constants.intro.welcomeText}</h1>
      <h2>{constants.intro.intructionsText}</h2>
      <h3>{constants.intro.challengeText}</h3>
      <LinkButton text={constants.intro.ctaText} to='/trivia' />
    </div>
  );
};

export default IntroPage;
