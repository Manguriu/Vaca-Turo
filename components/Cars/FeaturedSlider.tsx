"use client"
import React from 'react'
import Slider from "react-slick";
import FeaturedCards from './FeaturedCards';



export default function FeaturedSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 2,
    };
    return (
      <Slider {...settings} className='mt-5 padding-x padding-y max-width'>
        <div>
         <FeaturedCards />
        </div>
        <div>
        <FeaturedCards />
        </div>
        <div>
        <FeaturedCards />
        </div>
        <div>
        <FeaturedCards />
        </div>
        <div>
        <FeaturedCards />
        </div>
        <div>
        <FeaturedCards />
        </div>
      </Slider>
    );
  }


