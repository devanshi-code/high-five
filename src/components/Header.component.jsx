import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import h1 from './assets/images/headerCrousellImgs/h1.gif'
import h2 from './assets/images/headerCrouselImgs/h2.jpg';
import h3 from './assets/images/headerCrouselImgs/h3.jpg';
import h4 from './assets/images/headerCrouselImgs/h4.jpeg';
import h5 from './assets/images/headerCrouselImgs/h5.jpg';
import h6 from './assets/images/headerCrouselImgs/h6.jpg';
import h7 from './assets/images/headerCrouselImgs/h7.jpg';

const Header=()=>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

return(
<div className="header">
     <Slider {...settings}> 
      <div><img src={h1} alt="loading..." /></div>
      <div ><img src={h2} /></div>
      <div ><img src={h3} /></div>
      <div><img src={h4}/></div>
       <div><img src={h5}/></div>
       <div><img src={h6}/></div>
       <div><img src={h7}/></div>
      </Slider>
      
</div>
);
}
export default Header;
