import React from 'react'
import './header.scss'
import logo from '../../assets/geekrk.png'

function Header() {
  return (
    <div className="header-row">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-right">
        <span>HOME</span>
        <span>BLOGS</span>
        <span>CONNECT</span>
        {/* <span>Lifestyle</span> */}
      </div>
    </div>
  )
}

export default Header
