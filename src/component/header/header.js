import React from "react";
import "./header.css";
import Headerimg from  "../../assets/header__img.jpg";  
function Header(){
  return (
    <>
       <div className="header__overlay"></div>
       <img className="header--img__bckg" src={Headerimg} alt="headerbckg"/>
       
    </>

  )

}

export default Header;