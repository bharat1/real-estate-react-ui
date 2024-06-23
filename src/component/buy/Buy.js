import React from "react";
import card1img from '../../assets/card1img.svg';
import card2img from '../../assets/card2img.svg';
import card3img from '../../assets/card3img.svg';
import './buy.css';

function Buy(){

     return (
        <section className="buy  container">
        <div className="sec-container">
              <div className="textheader">
                <h3>See How Realtor Can  Help</h3>
                <p>We’ve more than 745,000 apartments, place & plot.​</p>
              </div>
              
              <div className="card-header">
                <div className="card-main">    
                  <article>
                 <div className="card-img">
                    <img className="cardimg1" src={card1img} alt="cardimg1"/> 
                 </div>
                 <div className="card-content">
                    <h2>Buy a Property</h2>
                    <p>Buy Best Residential Properties</p>
                    <button>Find a home</button>
                 </div>

                 </article>
                
              </div>

              <div className="card-main">    
              <article>
                 <div className="card-img">
                 <img className="cardimg2" src={card2img} alt="cardimg2"/> 
                 </div>
                 <div className="card-content">
                    <h2>Sell a Property</h2>
                    <p>Sell Best Residential Properties</p>
                    <button>Place an ad</button>
                 </div>

                 </article>
                 
              </div>

              <div className="card-main">    
              <article>
                 <div className="card-img">
                 <img className="cardimg3" src={card3img} alt="cardimg3"/>
                 </div>
                 <div className="card-content">
                    <h2>Rent a Property</h2>
                    <p>Rent Best Residential Properties</p>
                    <button>Find a rental</button>
                 </div>

                 </article>
                
              </div>
              </div>
            </div>
            </section>

     )

}


export default Buy