import React from 'react'
import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import background from './assets/startup.svg'
import Blog from './components/blogs/blogs'
import js from './assets/js-icon.svg'
import react from './assets/react-icon.svg'
import angular from './assets/angular-icon.svg'
import typescript from './assets/typescript-icon.svg'

function App() {
  return (
    <div className="App">
      <main>
        <Header></Header>
        <section className="website-background">
          <div className="intro-section">
            <span>Hey, I'm Rohit</span>
            <span>
              Frontend developer
              <a
                className="company-link"
                href="https://primathon.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Primathon
              </a>
            </span>
            <span>I Love Web and F.R.I.E.N.D.S.</span>
          </div>
          <img src={background} alt="background" className="svg-background" />
        </section>
      </main>

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

      <Blog></Blog>

      <Footer></Footer>
    </div>
  )
}

export default App
