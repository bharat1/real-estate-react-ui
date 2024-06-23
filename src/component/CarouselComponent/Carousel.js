import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({demmanddata ,  recommendata, imageLimit = recommendata.length, imgPerSlide = 4 }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectData , setSelectData ] = useState([demmanddata , recommendata])
    
    // Limit the number of images to be displayed
    const limitedData =  recommendata.slice(0, imageLimit);

    const totalSlides = Math.ceil(limitedData.length / imgPerSlide);

    const goToPrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setActiveIndex((nextIndex) =>
            nextIndex === totalSlides - 1 ? 0 : nextIndex + 1
        );
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div className="carousel-slide" key={slideIndex} style={{ display: "flex", width: "100%" }}>
                        {limitedData
                            .slice(slideIndex * imgPerSlide, slideIndex * imgPerSlide + imgPerSlide)
                            .map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    item={item}
                                    active={activeIndex === slideIndex}
                                />
                            ))}
                    </div>
                ))}
            </div>
            <button className="carousel-button prev" onClick={goToPrev}>
                <FaChevronLeft />
            </button>
            <button className="carousel-button next" onClick={goToNext}>
                <FaChevronRight />
            </button>
        </div>
    );
}

export default Carousel;
