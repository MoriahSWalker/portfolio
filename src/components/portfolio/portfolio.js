import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/travel-blog.png";

// array of images to loop through added portfolio screenshots
// id, image, title, github, demo
// const data = [

// ]
// data.map({id,image, title, github, demo}) => {
//   return (
// <article key={id} className="portfolio__item">
//         <div className="portfolio__item-image"></div>
//         <img src={image} alt={title}></img>
//         <h3>{title}</h3>
//         <div className="portfolio__item-cta">
//           <a
//             href={github}
//             target="_blank"
//             className="btn"
//           >
//             GitHub
//           </a>
//           <a
//             href={demo}
//             target="_blank"
//             className="btn btn-primary"
//           >
//             Live Demo
//           </a>
//         </div>
//       </article>

//   )
// }

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* {insert.map here and remove the rest} */}
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1}></img>
          <h3>Public Travel Journal</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/MoriahSWalker/travel_logger"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://travel-blog-4gki.onrender.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
