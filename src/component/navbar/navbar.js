import React , {useEffect, useState} from "react";
import './navbar.css';
import {SiYourtraveldottv} from 'react-icons/si';
import { MdOutlineRealEstateAgent } from "react-icons/md";
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import {menuItems} from '../menuItem';
import {Dropdown , Rentdropdown} from "../dropdownMenu/Dropdown";
 
function Navbar(){
 const [active , setActive] = useState('navBar')
 const [dropdown  , setDropdowm] = useState(false); 
 const [dropdownn  , setDropdowmn] = useState(false);
 const [navSize , setnavSize] = useState("");
 const [navColor , setnavColor] = useState(""); 
 
 function navbarToggle(){
  setActive('navBar activeNavbar')
 }

 function removeToggle(){
  setActive('navBar')
 }

 const listenScrollEvent = ()=>{
    window.scrollY > 10  ? setnavColor("#808080") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem"); 
   
 }

 useEffect(()=>{
    window.addEventListener("scroll" , listenScrollEvent);
    return ()=>{
      window.removeEventListener("scroll" ,listenScrollEvent);
    } 
 })
 

  return (
    <>
      <section className="navBarSection"  >
         <div className="header" style = {{backgroundColor: navColor , height:navSize , transition:"all 1s"}}>
          <div className="logoDiv">
          <a href="#" className="logo">
             <h1 className="flex"><MdOutlineRealEstateAgent className="icon"/>
             HappyEstate
             </h1>
             
          </a>
         </div>

        <div className={active}>
             <ul className="navLists flex">
                 {
                   menuItems.map((item)=>{
                    if(item.title ==="Buy"){
                      return (
                        <li key = {item.id} className = {item.cName} 
                        onMouseEnter ={()=> setDropdowm(true)}
                        onMouseLeave ={()=> setDropdowm(false)}
                        >
                          <a href={item.path} 
                         
                          className ={item.cTitle}>{item.title}</a>
                          {dropdown && <Dropdown/>}
                        </li>
                        
                      )   
                    }

                    if(item.title ==="Rent"){
                      return (
                        <li key = {item.id} className = {item.cName} 
                        onMouseEnter ={()=> setDropdowmn(true)}
                        onMouseLeave ={()=> setDropdowmn(false)}
                        >
                          <a href={item.path} 
                         
                          className ={item.cTitle}>{item.title}</a>
                          {dropdownn && <Rentdropdown/>}
                        </li>
                        
                      )   
                    }
                    return (
                      <li key = {item.id} className = {item.cName} >
                        <a href={item.path} className ={item.cTitle}>{item.title}</a>
                      </li>
                    )
                   })

                 }


                {/* <li className="navItem">
                  <a href="#" className="navLink">Buy</a>
                </li> */}

                {/* <li className="navItem">
                  <a href="#" className="navLink">Rent</a>
                </li>

                <li className="navItem">
                  <a href="#" className="navLink">Sell</a>
                </li>

                <li className="navItem">
                  <a href="#" className="navLink">Service</a>
                </li>

                <li className="navItem">
                  <a href="#" className="navLink">Contact Us</a>
                </li> */}

                <div className="headerBtns flex">
                     <button className="btn loginBtn">
                      <a href="#">Login</a>
                     </button>
                     <button className="btn">
                      <a href="#">Sign Up</a>
                     </button>
                </div>
             </ul>

             {/* <Dropdown/> */}

             <div onClick={removeToggle} className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
             </div>
        </div>
             

             

             <div onClick={navbarToggle} className="toggleNavbar">
              <TbGridDots className="icon"/>
             </div>


         </div>



      
        </section>
    </>

  )

}

export default Navbar;

