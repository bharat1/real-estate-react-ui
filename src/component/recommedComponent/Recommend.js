import React from 'react';
import Carousel from '../CarouselComponent/Carousel';
import './recommend.css';
import { recommendata } from '../../utils/recommendata';

function Recommend() {
    return (
        <section className='feature section container'>
            <div className='sec-container'>
                <div className='recommend'>
                    <h2>Recommended Projects</h2>
                    <p>The most searched projects in Cities</p>
                </div>
            </div>
            <div className='carousel-container'>
                <Carousel
                    recommendata={recommendata}
                    imageLimit={7}  // Limit total number of items to display
                    imgPerSlide={4} // Number of items per slide
                />
            </div>
        </section>
    );
}

export default Recommend;
