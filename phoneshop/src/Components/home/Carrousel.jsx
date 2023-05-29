import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

import phone1 from "../../images/phone1.png";
import phone2 from "../../images/phone2.png";
import phone3 from "../../images/phone3.png";

const Carrousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        phone1,
        phone2,
        phone3
    ];

    const imageStyle = {

        width: "300px",
        height: "350px"
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        centerMode: true,
        centerPadding: "10px"
    };

    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}>
        <p className="carousel-text">Check out our latest phones:</p>
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="carousel-slide" >
                    <img src={image} alt={`Image ${index + 1}`} style={imageStyle}/>
                </div>
            ))}
        </Slider>
        </motion.div>
    );
};

export default Carrousel