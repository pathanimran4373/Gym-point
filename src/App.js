import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home-page/Home';
import { Routes, Route} from 'react-router-dom';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Services from './component/Services/Services';

import Footer from './component/Footer/Footer';
import Footer_base from './component/Footer_base/Footer_base';
function App() {
  return (
    <>
    <Header/>
    
   <Routes>
    <Route path="/Gym-point" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about"  element = {<About/>}/>
    <Route path="/services"  element = {<Services/>}/>
   </Routes>
   <Footer/>
   <Footer_base/>
   </>
  );
}

export default App;
