import React from 'react';
import Carousel from '../CarouselComponent/Carousel';
import './demmand.css';
import { demmandata } from '../../utils/demmandata';

function Demmand(){

    return(
        <section className='feature section container'>
        <div className='sec-container'>
            <div className='recommend'>
                <h2>Projects in High Demand</h2>
                <p>The most explored projects in Gurgaon</p>
            </div>
        </div>
        <div className='carousel-container'>
            <Carousel
                recommendata={demmandata}
                imageLimit={7}  // Limit total number of items to display
                imgPerSlide={4} // Number of items per slide
            />
        </div>
    </section>
    )
}

export default Demmand;