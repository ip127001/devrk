import React from 'react'
import './App.scss'
import Footer from './components/footer/footer'
import background from './assets/profile.jpg'
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
            <span>Hi, I'm Rohit</span>
            <span>
              Software Engineer
              <a
                className="company-link"
                href="https://www.paytmbank.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => clickLink()}
              >
                @Paytm Bank
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
              <li className="info">Fav sitcom: TBBT & FRIENDS</li>
              <li className="info">Fav Band: One direction & Coldplay</li>
              <li className="info">I share blogs and code snapshots on <a
                href="https://twitter.com/geekrk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
            </a></li>
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
