import React, { useState } from "react";
import Card from "../Card/card";
import ButtonList from "../button/ButtonList";
import "./feature.css";
import { cardsdata } from "../../utils/cardsdata";


function Feature(){
  const [homes , setHomes] = useState(cardsdata);
  // console.log(homes);
  const menuItems = [...new Set(cardsdata.map((val)=>val.category))]
  // console.log(menuItems);
  const filterItems = (ct)=>{
      const newItems = cardsdata.filter((newval)=> newval.category === ct)
      setHomes(newItems)
    } 



    
  
  return (
      <section className="feature section container">
           <div className="sec-container">
              <div className="feature-text">
                <h2>Featured Properties</h2>
                <p>Handpicked properties by our team.</p>


              </div>
            

             <ButtonList 
             menuItems = {menuItems}
             filterItems = {filterItems}
             setHomes = {setHomes}    
             />
                  
             <Card homes = {homes}/>

            
             

           </div>
    
      </section>

    )
}

export default Feature;












