import React from 'react';
import { useState } from 'react';
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBookAlt} from "react-icons/bi";
import {BiMessage} from "react-icons/bi";
import {BsPaintBucket} from "react-icons/bs";




const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBookAlt/></a>
      <a href="#hobbies" onClick={() => setActiveNav("#hobbies")} className={activeNav === "#hobbies" ? "active" : ""}><BsPaintBucket/></a> 
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessage/></a>
    </nav>
  )
}

export default Nav;