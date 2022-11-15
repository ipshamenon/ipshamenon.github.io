import React,{useRef} from 'react';
import "./contact.css";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineLinkedin} from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9a0fng', 'template_fzghqlr', form.current, 'xb_Rab1ZNBqxFi8Dj')
  
    e.target.reset();
  };

  return (
    <section id="contact">
    <h5> Get In Touch</h5>
    <h2> Contact Me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>ipsha.menon@gmail.com</h5>
          <a href="mailto:ipsha.menon@gmail.com" target="_blank">Send a message</a>
        </article>

        <article className='contact_option'>
          <AiOutlineLinkedin className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <h5 className='contact_option-btn'>Let's Connect!</h5>
          <a href="https://www.linkedin.com/in/ipshamenon" target="_blank">Send a Message</a>
        </article>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className='btn btn-primary'> Send Message</button>
      </form>
    </div>
    </section>
  );
}


export default Contact;