import React from "react";
import './button.css';
import { cardsdata } from "../../utils/cardsdata";

function  ButtonList({menuItems , filterItems , setHomes}){
  return  (
    <div className="feature-tabs">
    <ul className="tabsProperty" >
      {
        menuItems.map(val=>(
            <li onClick={()=>filterItems(val)}>{val}</li>

        ))
      }
      {/* <li>ALL</li>
      <li>HOUSES</li>
      <li>APARTMENT</li>
      <li>OFFICE</li> */}
      <li onClick={()=> setHomes(cardsdata)}>ALL</li>
    </ul>

</div>


  )
}


export default ButtonList;