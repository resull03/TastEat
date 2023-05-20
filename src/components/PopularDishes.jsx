import React from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import chicken from './images/chicken.jpg'
import fresh from './images/fresh.jpg'
import burger from './images/burger.jpg'
import dishes from '../dishes.json'
import hotdog from './images/hotdog.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const PopularDishes = () => { 


 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   
  

  return (
    <>
    <div    className="dishes">
    
    <h3 date-aos='fade-up' >Popular Dishes</h3>
    <p className='title' date-aos='fade-up' >There is a game between the waiters in restaurant to see who serves the food to <br /> each table fastest. That led to attempting the Guinness Record.</p>
    <div date-aos='fade-right' className="cards">
 
    <Slider {...settings}>
  {dishes.map((dish)=>
         <article className="card">
         <img src={dish.image} alt='' />
         <h4>  <p>{dish.name} </p><span>{dish.price}</span></h4>
         <hr />
         <p className='title' >{dish.title}</p>
                 </article>
  )}

       </Slider >
     
    </div>
    <Link data-aos='fade-up' to='/menu'><button className='dishes-button'>See all dishes</button> </Link>
</div>
</>
  )

}

export default PopularDishes