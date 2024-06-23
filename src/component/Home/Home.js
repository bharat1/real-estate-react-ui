import React from "react";
import Feature from "../featurecards/feature";
import "./home.css";
  
function Home(){
  return (
    <>
      <section className="home">
          <div className="secContainer container">
           <div className="homeText">
            <h1 className="title">
                 Plan Your Property with Happy Estate
            </h1>

            <p className="subTitle">

             The Best Real Estate Deals with Happy Estate.

            </p>
            <button className="btn">
              <a href="#">Explore Now</a>
            </button>
           </div>
          
           <div className="homeCard grid">
             <div className="locationDiv">
              <label htmlfor ="location">All Residential</label>
              <input type="text" placeholder = "Flat/Apratment"/> 
             </div>

             <div className="distDiv">
              <label htmlfor ="distance">Location</label>
              <input type="text" placeholder = "Delhi...."/> 
             </div>

             <div className="priceDiv">
              <label htmlfor ="price">Buy/Rent</label>
              <input type="text" placeholder = "Buy/Rent"/> 
             </div>

             <button className="btn">
              Search
             </button>
              
            </div> 
   

          </div>
      </section>
       
    </>

  )

}

export default Home;