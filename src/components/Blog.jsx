import React, { Component } from "react";
import Slider from "react-slick";
import comment1 from './images/comment1.svg';
import comment2 from './images/comment2.svg'
import comment3 from './images/comment3.svg'
import comment4 from './images/comment4.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Blog = () => {
 
  AOS.init();


 
      
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
      <div className="blog">
 <div className="bg-image">
   <h4>TastEat</h4>
 <h3>BLOG</h3>
 </div>

<div    data-aos='fade-up'  className="testimonial">
<div className="test-top">
<h4>Testimonial</h4>
<h3>Our Clients Say </h3>
<p>We love to hear from customers, so please leave a comment or say hello in an email.</p>
</div>
</div>
</div>

<div  data-aos='fade-right' className="comments">


        <Slider {...settings}>
        <div className="slide">
    <div className="sl-top">
    <img src={comment1} alt="" />
    <div className="sl-name">
    <h4>Natasha D</h4>
      <p className='orange'>New York</p>
    </div>
   
    </div>
    <div className="sl-bottom">
      <p>They known for its fabulous taste and food. Anywhere
         you go your hunger is satisfied.
          The best chicken & burgers those are yummy.</p>
      </div>

  </div>
         
  <div className="slide">
    <div className="sl-top">
    <img src={comment2} alt="" />
    <div className="sl-name">
    <h4>Jack Sparrow</h4>
    <p className="orange">Salt Lake City</p>
    </div>
    </div>
<div className="sl-bottom">
<p>I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & 
  attention to detail is in league of its own.</p>
</div>

  </div>
 
  <div className="slide">
    <div className="sl-top">
    <img src={comment3} alt=""  />
    <div className="sl-name">
      <h4>Martin</h4>
      <p className='orange'>San Diego</p>
    </div>

    </div>
    <div className="sl-bottom">
      <p>Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied.
         They give best chicken and burgers those are yummy.</p>
    </div>
  </div>

 
  <div className="slide">
    <div className="sl-top">
    <img src={comment4} alt="" className="wide-img" />
    <div className="sl-name">
      <h4>Sarah</h4>
      <p className='orange'>Canada</p>
    </div>

    </div>
    <div className="sl-bottom">
      <p>Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied.
         They give best chicken and burgers those are yummy.</p>
    </div>
  </div>



  </Slider >

  </div>


<div  className="news">
<div className="news-top">
  <h4 data-aos='fade-up' >BLOG</h4>
  <h3 data-aos='fade-down'  >Be First Who Read News</h3>
  <p data-aos='fade-down' >Explore the latest stories about our dishes, offers,events and future plans here.</p>
</div>
<div className="news-bottom">
  <div  data-aos='fade-left'  className="article">
    <div className="article-top">
    <Link to='/about'> <button>View More</button> </Link>  
    </div>
    <div className="article-bottom">
      <div className="article-title">
        <h4>COOKING</h4>
        <h4>MARCH 19, 2022</h4>
      </div>
      <h3> The Legend of US Cuisine: The Story of Hungry People</h3>
      <p>Capitalize on low-hanging fruit to identify a ballpark value added matrix economically 
        and the creative activity to beta test override the food quality.</p>
      </div>
      </div>
      <div  data-aos='fade-right' className="article">
    <div className="article-top">
     <Link to='/about'><button>View More</button> </Link>  
    </div>
    <div className="article-bottom">
      <div className="article-title">
        <h4>DELICIOUS</h4>
        <h4>MARCH 19, 2022</h4>
      </div>
      <h3>The Most Popular Delicious Food of Mediterranean Cuisine</h3>
      <p>Strategies on low-hanging fruit to identify a ballpark value added matrix 
        economically and the creative activity to beta test override the food quality.</p>
    </div>
  </div>

</div>

</div>
    </>
    );
  }

export default Blog