import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import { Home } from './components/pages/home';
import Calendar from './components/pages/Calendar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';

function App() {
  return (
    <div className="App">
     
      <Navbar />
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About />} />
         <Route path='/Calendar' element={<Calendar />} />
         <Route path='/Contact' element={<Contact />} />
         <Route path='/Services' element={<Services />} />
       </Routes>
         
        
      
      
    </div>
  );
}

export default App;
