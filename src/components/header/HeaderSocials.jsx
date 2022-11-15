import React from 'react';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';

const HeaderSocials = () => {
  return (
    <div className="header_socials">

    <a href="https://www.linkedin.com/in/ipshamenon" target="_blank"><AiOutlineLinkedin/></a>
    <a href="https://www.github.com/ipshamenon" target="_blank"><FiGithub/></a>
    <a href="mailto:ipsha.menon@gmail.com" target="_blank"><HiOutlineMail/></a>

    </div>
  )
}

export default HeaderSocials;