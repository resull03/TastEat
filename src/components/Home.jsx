import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Welcome from './Welcome'
import PopularDishes from './PopularDishes'
import Services from './Services'
AOS.init();

const Home = () => {
  return (
  <>
<Welcome />
<PopularDishes />
<Services />

  </>
  )
}

export default Home