import HomePage from "./page/HomePage"
import React,{useEffect} from 'react'
import {init} from 'aos';

const App = () => {
  useEffect(() => {
    init({
      anchorPlacement: "top-left",
      duration: 1000,
    })
    return () => {
    }
  }, [])
  return (
    <div className="App">
      <HomePage></HomePage>
    </div>
  );
};

export default App;
