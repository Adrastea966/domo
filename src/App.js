import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js';
import About from './componentes/About.js';
import Servicies from './componentes/Services.js';
import Contact from './componentes/Contact.js';
import Footer from './componentes/Footer.js';
import './App.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Main */}
      <Main />
      {/* About */}
      <About />
      {/* Servicies */}
      <Servicies/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;