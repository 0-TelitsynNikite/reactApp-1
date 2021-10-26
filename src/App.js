import React, { useContext } from 'react';
import Intro from './components/intro/Intro.js';
import About from './components/about/About.js';
import ProductList from './components/productList/ProductList.js';
import Contact from './components/contact/Contact.js';
import Toggle from './components/toggle/Toggle.js';
import { ThemeContext } from './context.js';
import "./style.css"


function App() {

  const theme = useContext(ThemeContext),
        darkMode = theme.state.darkMode;

  return (
      <div 
        style={{
          backgroundColor:darkMode ? "#222" : "white" , 
          color: darkMode && "white"
          }}
      >
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
       </div>
  );
}

export default App;
