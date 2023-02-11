import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello I'm</h5>
            <h1>Adarsh</h1>
            <h5 className="text-light">MERN STACK DEVELOPER</h5>
            <CTA/>
            <HeaderSocials/>
        </div>
    </header>
  )
}

export default Header