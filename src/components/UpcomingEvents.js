import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Event from "./Event";
import "./style/upcomingEvents.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const Upcoming=()=> {

    const events=[{eventName:"Hack-O-Uplift",start:"September 3rd, 2021",end:"September 5th, 2021",happening:"Online"},{eventName:"Tezasia Hackathon",start:"August 10th, 2021",end:"September 6th, 2021",happening:"Online"},{eventName:"Hack-O-Uplift",start:"September 3rd, 2021",end:"September 5th, 2021",happening:"Online"},{eventName:"Tezasia Hackathon",start:"August 10th, 2021",end:"September 6th, 2021",happening:"Online"},{eventName:"Hack-O-Uplift",start:"September 3rd, 2021",end:"September 5th, 2021",happening:"Online"},{eventName:"Tezasia Hackathon",start:"August 10th, 2021",end:"September 6th, 2021",happening:"Online"},{eventName:"Hack-O-Uplift",start:"September 3rd, 2021",end:"September 5th, 2021",happening:"Online"},{eventName:"Tezasia Hackathon",start:"August 10th, 2021",end:"September 6th, 2021",happening:"Online"}];

  return (
    <div className="Upcoming">
        <h1>Upcoming Events</h1>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {events.map((item) => (
            <Event eventName={item.eventName} start={item.start} end={item.end} happening={item.happening}/>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Upcoming;