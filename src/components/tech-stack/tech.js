import React from 'react'
import './tech.scss'
import js from '../../assets/js-icon.svg'
import react from '../../assets/react-icon.svg'
import angular from '../../assets/angular-icon.svg'
import typescript from '../../assets/typescript-icon.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import chrome from '../../assets/chrome.svg'

function Tech() {
  return (
    
    <div className="tech-stack-container">
      {/* <div className="tech-stack" style={{ 'margin-bottom': '50px' }}>
        <span>Frontend is all about rendering. </span>
      </div> */}
      <div className="tech-stack">
        <span>Tech: </span>
        <div className="tech-stack__logos">
          <img src={html} alt="html" style={{ width: '100px' }} />
          <img src={css} alt="css" style={{ width: '100px' }} />
          <img src={js} alt="js" />
          <img src={typescript} alt="typescript" />
          <img src={react} alt="react" style={{ width: '70px' }} />
          <img src={angular} alt="angular" style={{ width: '70px' }} />
          <img src={chrome} alt="chrome" style={{ width: '75px' }} />
        </div>
      </div>
    </div>
  )
}

export default Tech
