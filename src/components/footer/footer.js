import React from 'react'
import './footer.scss'
import github from '../../assets/github.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'

function Footer() {
  const socialArr = [
    { name: github, link: 'https://github.com/ip127001' },
    {
      name: facebook,
      link: 'https://www.facebook.com/profile.php?id=100024520386126',
    },
    { name: twitter, link: 'https://twitter.com/geekrk' },
    {
      name: linkedin,
      link: 'https://www.linkedin.com/in/rohit-kumawat-0088b7102/',
    },
  ]

  function trackClick(link) {
    window.gtag('event', 'social_media_clicked', {
      event_category: 'social media',
      event_label: 'social media tracking',
      value: link,
    })
  }

  return (
    <div className="footer-row">
      <span> Let's connect:</span>
      {socialArr.map((el) => {
        return (
          <div>
            <a
              href={el.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick(el.link)}
            >
              <img src={el.name} alt={el.name} />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
