import React from "react";
import "./portfolio.css";
import eiser from "../../assets/Screenshot from 2023-06-10 03-07-22.png";
import cambiame from "../../assets/Screenshot from 2023-06-10 03-18-23.png";
import netflix from "../../assets/Screenshot from 2023-06-10 03-34-10.png";

const data = [
  {
    id: 1,
    image: eiser,
    title: "eiser.tk",
    Github: "https://github.com/adarsht0001/eiser-ecommerce",
    demo: "https://eiser.tk/",
    description:
      "Build an e-commerce project with Node.js, Express Generator, MongoDB, HBS, Twilio, Razorpay, and PayPal for seamless product listings, shopping cart, and secure payment integration",
  },
  {
    id: 2,
    image: cambiame,
    title: "cambiame",
    Github: "https://github.com/adarsht0001/Cambiame",
    demo: "https://cambiame.site/",
    description:
      "Build a comprehensive social media web app with React, Node.js, MongoDB, Express, TypeScript, Clean Architecture, AWS S3, MUI, Redux, and Socket.io for seamless user interactions.",
  },
  {
    id: 3,
    image: netflix,
    title: "Netflix Clone",
    Github: "https://github.com/adarsht0001/netflix",
    demo: "https://adarsht0001.github.io/netflix/",
    description:
      "Developed a Netflix clone using React, leveraging the TMDB API and Axios library, to create an immersive and user-friendly web application for browsing, streaming, and discovering a vast collection of movies and TV shows.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, Github, demo, description }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} height="300px" />
              </div>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <div className="portfolio_item-cta">
                <a
                  href={Github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
