import React from 'react'
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Hobbies from "./hobbies/Hobbies";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";


export const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Hobbies/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
