import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import Contect from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <Contect/>
    </div>
  );
}

export default App;
