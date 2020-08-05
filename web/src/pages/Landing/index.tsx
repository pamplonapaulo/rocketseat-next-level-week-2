import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'

function Landing () {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div id="logo-container">
          <img src={LogoImg} alt="Logo Proffy"/>
          <h2>Your online learning platform.</h2>
        </div>

        <img
          src={LandingImg}
          alt="Learning Platform"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img
              src={StudyIcon}
              alt="Study"
            />
            Study
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img
              src={giveClassesIcon}
              alt="Give classes"
            />
            Teach
          </Link>
        </div>

        <span className="total-connections">
          200 connections done
          <img src={purpleHeartIcon} alt="Purple heart"/>
        </span>

      </div>
    </div>
  )
}

export default Landing
