import React from 'react'
import './App.scss'
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
        <section className="website-background">
          <div className="intro-section">
            <span>Hey, I'm Rohit</span>
            <span>
              Software Engineer
              <a
                className="company-link"
                href="https://primathon.in"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => clickLink()}
              >
                @Paytm
              </a>
            </span>
            <ul>
              <li className="info">
                I love discussing ideas and shaping them into products.
              </li>
              <li className="info">
                I like solving complex problems and debugging issues.
              </li>
              <li className="info">
                I am framework agnostic and don't shy away from using any tech.
              </li>
              <li className="info">I take ownership in my work.</li>
              <li className="info">I believe in work-life balance.</li>
              <li className="info">Fav sitcom: TBBT & FRIENDS</li>
            </ul>
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
