// made by Erwan

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import DragonTattoo from '../img/prices/dragon-tattoo.png';
import ButterflyTattoo from '../img/prices/butterfly-tattoo.jpg'
import CloverTattoo from '../img/prices/clover-tattoo.png'
import OwlTattoo from '../img/prices/owl-tattoo.jpg'
import QueenOfHeart from '../img/prices/queen-of-heart-tattoo.jpg'
import SleeveTattoo from '../img/prices/sleeve-tattoo.png'

export default function PricesSlider() {
    return (
        <Carousel
            infiniteLoop="true"
            useKeyboardArrows="true"   
        >
                <div>
                    <img src={ButterflyTattoo} alt="Price example" />
                    <p className="legend">Price: ca. 2000 DKK</p>
                </div>
                <div>
                    <img src={CloverTattoo} alt="Price example" />
                    <p className="legend">Price: 400 DKK</p>
                </div>
                <div>
                    <img src={QueenOfHeart} alt="Price example" />
                    <p className="legend">Price: 1500 DKK</p>
                </div>
                <div>
                    <img src={OwlTattoo} alt="Price example" />
                    <p className="legend">Price: 8000 DKK</p>
                </div>
                <div>
                    <img src={DragonTattoo} alt="Price example" />
                    <p className="legend">Price: 9000 DKK</p>
                </div>
                <div>
                    <img src={SleeveTattoo} alt="Price example" />
                    <p className="legend">Price: 20 000 DKK</p>
                </div>
        </Carousel>
    )
}