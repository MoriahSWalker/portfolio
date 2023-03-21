import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Moriah
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100069026883126">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/moriah-walker-893725259/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Created By Moriah. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
