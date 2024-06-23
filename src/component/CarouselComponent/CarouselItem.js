import React from 'react';

const CarouselItem = ({ item, active }) => {
    if (!item) return null;

    const { imageUrl, title, cityName , name , propertyTypes , priceRange } = item;

    return (
        <div className={`carousel-item ${active ? "active" : ""}`}>
            <div className="card">
                <img src={imageUrl} alt={title} />
                <div className='carousel-caption'>
                    <h3>{name}{title}</h3>
                    <p>{propertyTypes}</p>
                    <p>{priceRange}</p>
                </div>
            </div>
        </div>
    );
}

export default CarouselItem;
