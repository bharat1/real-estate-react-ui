import react , {useState} from "react";
import { buyMenu } from "../menuItem";
import { rentMenu } from "../menuItem";
import "./Dropdown.css";

 export function Dropdown(){
 const [dropdown , setDropdowm] = useState(false);
 
 

    return (
     <>
     <ul className= {dropdown ? "services-submenu clicked" : "services-submenu"}  onClick={()=> setDropdowm(!dropdown)}>
         {
         buyMenu.map((item)=>{
            return (
                <li key={item.id}>

                    <a href={item.path} className ={item.cName}>{item.title}</a>
                </li>
            )
         }) 
         }

     </ul>
     </>

    );

}

 export function Rentdropdown(){
    const [rent , setRent] = useState(false);
   
       return (
        <>
        <ul className= {rent ? "services-submenu clicked" : "services-submenu"}  onClick={()=> setRent(!rent)}>
            {
            rentMenu.map((item)=>{
               return (
                   <li key={item.id}>
   
                       <a href={item.path} className ={item.cName}>{item.title}</a>
                   </li>
               )
            }) 
            }
   
        </ul>
        </>
   
       );
   
   }


// export default Dropdown;


