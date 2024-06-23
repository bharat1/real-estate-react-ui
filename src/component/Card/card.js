import React from "react"
import './card.css';
import  {cardsdata} from '../../utils/cardsdata';





function  Card({homes}){
  return (
    //  <section className="section container">
        <section className="section container">
            <div className="cardContainer">
            {
               homes.map((item , index)=>(
                
        <div className="box" key ={index}>
                <div className="top">
                    <img src={item.src} alt={item.alt}></img>
                    <span className="heart">
                        {item.icon}
                      {/* <AiOutlineHeart className="heart"></AiOutlineHeart> */}
                      {/* <FaExchangeAlt className="exchange"></FaExchangeAlt> */}
                        
                        </span>   
                  
                </div>
                <div className="bottom">
                <h3>{item.heading}</h3>
          <p>
            {item.description}
          </p>
          <div className="advants">
            <div>
              <span>{item.bathroom}</span>
              <div>{item.iconbath}<span>{item.Nofobathroom}</span></div>
            </div>
            <div>
              <span>{item.bedroom}</span>
              <div>{item.iconbath}<span>{item.Nofobedroom}</span></div>
            </div>
            <div>
              <span>{item.area}</span>
              <div>
              {item.iconarea}<span>{item.NofoArea}<span>{item.NofoAreaft}</span></span>
              </div>
            </div>
          </div>
          <div className="price">
            <span>{item.sale}</span>
            <span>{item.price}</span>
          </div>
                </div>

            </div>
           
               )) 
            }
          </div> 
             
             
           

      </section>

  )

}

export default Card;