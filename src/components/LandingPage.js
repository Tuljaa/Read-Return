import axios from "axios";
import '../App.css';
import React, { useState, useEffect } from 'react';
import MyCarousel from "./MyCarousel";
import Categories from "./Categories";
import BestProduct from './BestProducts'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function LandingPage() {

  const [Bookdata, setBookdata]=useState([]);

  console.log(Bookdata);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    
    useEffect(()=>{
      async function fetchData(){
        let data= await axios.get(`https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDA5YIEvEK2p2-lsUfhKaHZw-nRJyl1YVk`);
       // console.log(data)
        let items=data.data.items
        setBookdata({...Bookdata,items});    
      }
      fetchData();
    },[])
  
  return (
  
    <div className='App' >
      <header>
       
        <MyCarousel/>
      
      </header>
      <Categories/>
      <div>
        <h3 style={{display:"flex",justifyContent:'center',marginBottom:'3%'}}> BEST SELLERS </h3>
        <Carousel infinite={true} responsive={responsive} className="BestProduct">
          { (Bookdata.items!==undefined)?
            Bookdata.items.map((curr,i)=>{
              //console.log(curr.volumeInfo)
            return (
                  <BestProduct data={curr.volumeInfo} key={i}/>
            )
            }
            )
            : <h5>NULL</h5>
            }
                </Carousel>
      </div>
    </div>
  );
}

export default LandingPage;

