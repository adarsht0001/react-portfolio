import React from "react";
import { BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/adarsht0001" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="hnsdsd" target="_blank">
        <BsLinkedin />
      </a>
      <a href="hnssd" target="_blank">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
