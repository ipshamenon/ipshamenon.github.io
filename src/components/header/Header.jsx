import React from 'react';
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/ME.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>

     <div className="container header_container">
      <h5>Hello!</h5>
      <h1> Ipsha Menon</h1>
      <h5 className="text-light">Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={ME} alt="me"></img>
      </div>

      <a href="#contact" className="scroll_down">Scroll Down</a>
     </div>

    </header>
    
  )
}

export default Header;
