import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/adarsht0001" target="_blank" rel="noreferrer">
        <BsGithub size={42}/>
      </a>
      <a href="https://www.linkedin.com/in/adarsh-t-629bba255/" target="_blank" rel="noreferrer">
        <BsLinkedin size={42}/>
      </a>
      <a href="https://t.me/Someonewithoutabrain" target="_blank" rel="noreferrer">
        <BsTelegram size={42}/>
      </a>
    </div>
  );
};

export default HeaderSocials;
