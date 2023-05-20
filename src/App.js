
import './App.css';
import React,{Suspense} from 'react'
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Welcome from './components/Welcome';
import { Route,Routes,Router,BrowserRouter} from 'react-router-dom'
import PopularDishes from './components/PopularDishes';
import Menu from './components/Menu';
import Services from './components/Services';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
const App = () => {
  return (
 <>




    <BrowserRouter>
    <Header />




    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/about' element={ <AboutUs />} />
      <Route path='/menu' element={ <Menu />} />   
      <Route path='/reserv' element={ <Reservation />} />
      <Route path='/contact' element={ <ContactUs/>} />
      <Route path='/blog' element={<Blog />} />

     </Routes>


< Footer />

    </BrowserRouter>




 
 </>
  )
}

export default App