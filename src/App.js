import React from 'react'
import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import background from './assets/startup.svg'
import Blog from './components/blogs/blogs'
import Tech from './components/tech-stack/tech'

function App() {
  function clickLink() {
    window.gtag('event', 'company_link_clicked', {
      event_category: 'tech',
      event_label: 'link tracking',
      value: 'https://primathon.in',
    })
  }

  return (
    <div className="App">
      <main>
        {/* <Header></Header> */}
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
                onClick={() => clickLink()}
              >
                @Primathon
              </a>
            </span>
            <span>I Love Web and F.R.I.E.N.D.S.</span>
          </div>
          <img src={background} alt="background" className="svg-background" />
        </section>
      </main>

      <Tech></Tech>

      <Blog></Blog>

      <Footer></Footer>
    </div>
  )
}

export default App
