import React from 'react'
import './experience.css';
import {BsPatchCheck} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3> 

          <div className='experience_content'>
            <article className='experience_details'>
                <BsPatchCheck className='experience_details-icons'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='experience_details-skill'>Experienced</small>
                  </div>
            </article>

            <article className='experience_details'>
                <BsPatchCheck className='experience_details-icons'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='experience_details-skill'>Intermediate</small>
                  </div>
            </article>

            <article className='experience_details'>
                <BsPatchCheck className='experience_details-icons'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='experience_details-skill'>Intermediate</small>
                  </div>
            </article>

            <article className='experience_details'>
                <BsPatchCheck className='experience_details-icons'/>
                  <div>
                    <h4>React</h4>
                    <small className='experience_details-skill'>Beginnner</small>
                  </div>
            </article>


            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Material UI</h4>
                  <small className='experience_details-skill'>Experienced</small>
                </div>
            </article>
       
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Experience</h3>
        <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>NodeJS</h4>
                  <small className='experience_details-skill'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Express</h4>
                  <small className='experience_details-skill'>Intermediate</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Java</h4>
                  <small className='experience_details-skill'>Intermediate</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>MongoDB</h4>
                  <small className='experience_details-skill'>Beginnner</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>SQL</h4>
                  <small className='experience_details-skill'>Beginnner</small>
                </div>
            </article>
        </div>
      </div>

      <div className='experience_other'>
          <h3>Other</h3> 

          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Git</h4>
                  <small className='experience_details-skill'>Experienced</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Bash</h4>
                  <small className='experience_details-skill'>Intermediate</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Figma</h4>
                  <small className='experience_details-skill'>Intermediate</small>
                </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icons'/>
                <div>
                  <h4>Postman</h4>
                  <small className='experience_details-skill'>Beginnner</small>
                </div>
            </article>
       
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience; 