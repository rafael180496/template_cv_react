import HomePage from "./page/HomePage"
import React,{useEffect} from 'react'
import {init} from 'aos';

const App = () => {
  useEffect(() => {
    init({
      anchorPlacement: "top-left",
      duration: 600, // Más rápido: 1000ms → 600ms
      easing: "ease-out-cubic",
      once: true, // Solo animar una vez
      delay: 50, // Delay mínimo para que se vea fluido
    })
    return () => {
    }
  }, [])
  return (
    <div className="App antialiased">
      <HomePage />
    </div>
  );
};

export default App;
