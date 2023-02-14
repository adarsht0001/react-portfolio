import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experince/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
    </>
  )
}

export default App