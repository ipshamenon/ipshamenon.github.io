import React from 'react'
import "./portfolio.css";
import portfolioIMG1 from "../../assets/keeper.png";
import portfolioIMG2 from "../../assets/to-do.png";
import portfolioIMG3 from "../../assets/weather-forecasting.png";
import portfolioIMG4 from "../../assets/img-processing.png";

const data = [
  {
    id: 1,
    image: portfolioIMG1,
    title: "Keeper Note App - Google Keep Clone",
    github:"https://github.com/ipshamenon/keeper-app",
    demo:"https://ipshamenon-keeperapp.onrender.com"
  },
  {
    id: 2,
    image: portfolioIMG2,
    title: "To Do List Full Stack App",
    github:"https://github.com/ipshamenon/todolist-app",
    demo:"https://ipshamenon-todolist.onrender.com"
  },
  {
    id: 3,
    image: portfolioIMG3,
    title: "Weather Forecasting App",
    github:"https://github.com/ipshamenon/weather-app",
    demo:"https://weather-app-4hba.onrender.com"
  },
  {
    id: 4,
    image: portfolioIMG4,
    title: "Image Processing Microlibrary",
    github:"https://github.com/ipshamenon/image-processing-microlibrary",
    demo:"https://github.com/ipshamenon/image-processing-microlibrary"
  },

]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className='portfolio_item-image'>
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;