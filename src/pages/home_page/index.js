import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="div-background" id="header-el">
        <h1>PORTFOLIO HEADER</h1>{" "}
      </div>
      <div className="div-background" id="content-div">
        App ScreenShots{" "}
      </div>
      <div className="div-background" id="about-div">
        About
        <Link
          to={"https://github.com/MoriahSWalker?tab=repositories"}
          target="_blank"
        >
          View GitHub
        </Link>
      </div>
      <div className="div-background" id="links-div">
        Links
      </div>
    </div>
  );
};

export default HomePage;
