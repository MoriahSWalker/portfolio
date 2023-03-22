import React from "react";
import "./header.css";
import CTA from "../CTA/cta";
import ME from "../../assets/portfolio_photo.png";
import HeaderSocials from "./headerSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Moriah Walker</h2>
        <h5 className="text-light"> Designer | Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div></div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
