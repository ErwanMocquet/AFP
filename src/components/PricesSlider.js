import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import studiopic from '../img/studio-desktop.jpg';

export default function PricesSlider() {
    return (
        <Carousel
            infiniteLoop="true"
            useKeyboardArrows="true"
        >
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 1</p>
                </div>
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 2</p>
                </div>
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 3</p>
                </div>
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 4</p>
                </div>
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 5</p>
                </div>
                <div>
                    <img src={studiopic} alt="Price example" />
                    <p className="legend">Price 6</p>
                </div>
        </Carousel>
    )
}