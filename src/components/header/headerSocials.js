import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/moriah-walker-893725259/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />
      </a>
      <a href="https://github.com/MoriahSWalker" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
