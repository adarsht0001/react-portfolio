import React from 'react'
import About from './components/about/About'
import Experience from './components/experince/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
    </>
  )
}

export default App