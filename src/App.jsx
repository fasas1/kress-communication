import React from 'react';
import './App.css'
 import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import CareerHighlights from './Components/CareerHighlights';
import Training from './Components/Training';
import ClientsCollaborations from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import WhatsAppFloat from './Components/WhatsappFloat';
import ScrollToTop from './Components/ScrollToTop';

function App() {


  return (
    <>
     
      <Hero/>
       <Navbar/>
      <About/>
      <Portfolio/>
      <CareerHighlights/>
      <Training/>
      <ClientsCollaborations/>
      <Contact/>
      <ScrollToTop/>
      <WhatsAppFloat/>
      <Footer/>
    </>
  )
}

export default App
