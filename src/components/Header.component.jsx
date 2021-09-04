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
<div className="header" style={{padding:"20px", height:"450px",width:"600px"}}>
     <Slider {...settings}> 
      <img src={h1} alt=''/>
      <img src={h2} />
      <img src={h3} />
      <img src={h4}/>
       <img src={h5}/>
       <img src={h6}/>
       <img src={h7}/>
      </Slider>
     
</div>
);
}
export default Header;
