import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from "./components/sections/Content/Content";
import HeaderSection from "./components/sections/HeaderSection/HeaderSection";

function App() {
  return (
    <div className="App">
        <HeaderSection/>
      <Content/>
    </div>
  );
}

export default App;
