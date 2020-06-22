import React from 'react'
import './header.css'
import background from '../../assets/background.png'

function Header() {
  return (
    <div>
      <img className="home-background" src={background} alt="background" />
    </div>
  )
}

export default Header
