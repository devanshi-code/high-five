import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import h1 from './assets/images/h1.gif';
import h2 from './assets/images/headerCrousellImgs/h2.jpg';
import h3 from './assets/images/headerCrousellImgs/h3.jpg';
import h4 from './assets/images/headerCrousellImgs/h4.jpeg';
import h5 from './assets/images/headerCrousellImgs/h5.jpg';
import h6 from './assets/images/headerCrousellImgs/h6.jpg';
import h7 from './assets/images/headerCrousellImgs/h7.jpg';

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
      <div><img src={h1} alt='' height="683px" width="711px"/></div>
      <div ><img src={h2} height="683px" width="711px" /></div>
      <div ><img src={h3} height="683px" width="711px" /></div>
      <div><img src={h4} height="683px" width="711px"/></div>
       <div><img src={h5} height="683px" width="711px"/></div>
       <div><img src={h6} height="683px" width="711px"/></div>
       <div><img src={h7} height="683px" width="711px"/></div>
      </Slider>
     
</div>
);
}
export default Header;
