/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}  className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#Experience"><AiOutlineHome/></a>
      <a href="#s"><AiOutlineHome/></a>
      <a href="#s"><AiOutlineHome/></a>
    </nav>
  )
}

export default Nav