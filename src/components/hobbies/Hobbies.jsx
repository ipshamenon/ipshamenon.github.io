import React from 'react'
import "./hobbies.css";
import HOBBY1 from "../../assets/cheesecake.jpg";
import HOBBY2 from "../../assets/cake.jpg";
import HOBBY3 from "../../assets/cheesecake.jpg";
import HOBBY4 from "../../assets/cheesecake.jpg";

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: HOBBY1,
    description:"Heart Cheesecake with Strawberry Jam"
  },
  {
    image: HOBBY2,
    description:"Blueberry Lemon Birthday Cake"
  }
]

const Hobbies = () => {
  return (
    <section id="hobbies">
      <h5> Things I Like To Do</h5>
      <h2> Hobbies </h2>

      <Swiper className="container hobbies_container"
       // install Swiper modules
       modules={[Navigation, Pagination]}
       navigation
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({image, description}, index) => {
          return (
            <SwiperSlide key={index} className='hobby_card'>
              <div className="craft_image">
                <img src={image}/>
              </div>
              <h5 className='craft_name'>{description}</h5>
            </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Hobbies;