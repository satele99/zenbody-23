import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
