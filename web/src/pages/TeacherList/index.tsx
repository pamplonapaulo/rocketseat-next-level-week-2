import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to='/'>
            <img src={backIcon} alt="Backwards"/>
          </Link>
          <img src={logoImg} alt="Proffy Logo"/>
        </div>
        <div className="header-content">
          <strong>Those are the available profs:</strong>
        </div>
      </header>
    </div>
  )
}

export default TeacherList;
