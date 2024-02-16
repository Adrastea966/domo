import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js';
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
    </div>
  );
}

export default App;