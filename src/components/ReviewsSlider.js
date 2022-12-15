import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '@mui/material/Rating';


export default function ReviewsSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <Slider {...settings} className="review-container">
            <div className="review-bloc">
                <h1 className="review-name">Morten Brink Pedersen</h1>
                <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large' className="ratingstars"/>
                <p className="review-content">"Fantastically skilled tattoo artist where there is always a focus on good quality!
                Definitely my favorite tattoo artist and I would recommend Ronni to anyone considering a new tattoo. Whether it's the first or the 100th, I'm sure you'll always get the best guidance you could need!"</p>
            </div>
            <div className="review-bloc">
                <h1 className="review-name">Bjarke Fuglsang</h1>
                <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large' className="ratingstars" />
                <p className="review-content">"A nice place to be!! -
                From the start when you come through the door to Mr and Mrs Tattoo
                You are greeted by "good feeling" and you quickly feel that you are in "safe" hands, with expert help from Ronni.
                The work that Ronni does is 100% world class - It doesn't get done much better."</p>
            </div>
            <div className="review-bloc">
                <h1 className="review-name">Christina Rosendahl</h1>
                <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large' className="ratingstars" />
                <p className="review-content">"Fantastic place, good service and hygiene, great guidance and advice, and not least fantastic work! This will definitely be my favorite tattoo artist in the future! "</p>
            </div>
            <div className="review-bloc">
                <h1 className="review-name">Nicolai Schou</h1>
                <Rating sx={{"& .MuiRating-iconFilled":{color:"#8E1B33"}}} name="read-only" value={5} readOnly size='large' className="ratingstars" />
                <p className="review-content">"I am super happy with the tattoos Ronni has done on me. Fantastic service, where there was time to talk about my ideas and find the coolest motifs. I will not go anywhere else in the future!"</p>
            </div>
        </Slider>
    )
}