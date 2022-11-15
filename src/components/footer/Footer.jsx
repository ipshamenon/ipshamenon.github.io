import React from 'react';
import "./footer.css";
import {AiOutlineLinkedin} from "react-icons/ai";
import {FiGithub} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';


const date = new Date();
let currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Ipsha Menon </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ipshamenon" target="_blank"><AiOutlineLinkedin/></a>
        <a href="https://www.github.com/ipshamenon" target="_blank"><FiGithub/></a>
        <a href="mailto:ipsha.menon@gmail.com" target="_blank"><HiOutlineMail/></a>
      </div>

      <div className='footer_copyright'>
        <small> Ipsha Menon {currentYear}  </small>
      </div>
    </footer>
  )
}

export default Footer;