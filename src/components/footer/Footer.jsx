import React from 'react';
import { BsLinkedin ,BsTelegram} from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Adarsh T</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/adarsh-t-629bba255/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="hhttps://github.com/adarsht0001" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://t.me/Someonewithoutabrain" target="_blank" rel="noreferrer" ><BsTelegram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer