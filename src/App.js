import axios from "axios";
import './App.css';
import React, { useState, useEffect } from 'react';
import MyNav from './components/MyNav'
import MyCarousel from "./components/MyCarousel";
import Categories from "./components/Categories";
import BestProduct from './components/BestProducts'


import LandingPage from "./components/LandingPage";

import { Routes,Route} from 'react-router-dom';

import AddToCart from "./components/AddToCart";

function App() {

  return(
    <div className="App">
     <MyNav/>
      <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route  path="/addtocart" element={<AddToCart/>} /> 
      </Routes>

    </div>
  )

}

 export default App;



