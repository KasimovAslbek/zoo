import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Mission from "./components/Mission";
import Pets from "./components/Pets";
import Paymnet from "./components/Paymnet";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);



  
  return (
    <div className="App font-roboto dark:bg-gray-900 overflow-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Hero/>
        <Works darkMode={darkMode} />
        <Mission/>
        <Pets darkMode={darkMode}/>
        <Paymnet/>
        <Testimonials darkMode={darkMode}/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
