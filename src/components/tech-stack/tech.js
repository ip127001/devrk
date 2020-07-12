import React from 'react'
import './tech.scss'
import js from '../../assets/js-icon.svg'
import react from '../../assets/react-icon.svg'
import angular from '../../assets/angular-icon.svg'
import typescript from '../../assets/typescript-icon.svg'

function Tech() {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack">
        <span>My Favourite Tech Stack: </span>
        <div className="tech-stack__logos">
          <img src={typescript} alt="typescript" />
          <img src={js} alt="js" />
          <img src={react} alt="react" />
          <img src={angular} alt="angular" style={{ width: '100px' }} />
        </div>
      </div>
      <div className="tech-stack">
        <span>Currently working on: </span>
        <div className="tech-stack__logos">
          <img
            src="https://img.icons8.com/fluent/96/000000/chrome.png"
            alt="chrome"
          />
          Chrome Extensions
        </div>
      </div>
    </div>
  )
}

export default Tech
