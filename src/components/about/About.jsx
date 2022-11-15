import React from 'react'
import "./about.css";
import ME from "../../assets/me.jpg";
import {SlGraduation} from "react-icons/sl";
import {MdWorkOutline} from "react-icons/md";
import {BiCode} from "react-icons/bi";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>

        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>

            <article className='about_card'>
              <SlGraduation className='about_icon'/>
              <h5>Experience</h5>
              <small> Recent 2022 Graduate</small>
            </article>

            <article className='about_card'>
              <MdWorkOutline className='about_icon'/>
              <h5>Internship </h5>
              <small> Cognizant - Full Stack Intern</small>
            </article>

            <article className='about_card'>
              <BiCode className='about_icon'/>
              <h5>Projects</h5>
              <small> 5+</small>
            </article>
        </div>

        <p>
        As a recent graduate in Information Systems and Computer Science from San José State University, I am incredibly eager to begin designing and building user-friendly solutions to everyday business problems. I thrive in environments where I can analyze the intersection of technology, business, and design to create engaging applications.
        </p>
        
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
