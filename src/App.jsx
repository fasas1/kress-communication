import React from 'react';
import './App.css'
// import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import CareerHighlights from './Components/CareerHighlights';
import Training from './Components/Training';
import ClientsCollaborations from './Components/Clients';
import Footer from './Components/Footer';

function App() {


  return (
    <>
      {/* <Navbar/> */}

      <Hero/>
      <About/>
      <Portfolio/>
      <CareerHighlights/>
      <Training/>
      <ClientsCollaborations/>
      <Footer/>
    </>
  )
}

export default App
