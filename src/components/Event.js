import React from 'react';


const Item=(props)=>{
    return(
<div className="Event-Container">
<h2>{props.eventName}</h2>
<br/>
<h5>Starts: <span>{props.start}</span></h5>
<h5>Ends: <span>{props.end}</span></h5>
<br/>
<h3>Happening <span>{props.happening}</span></h3>
<br/>
<button>Participate</button>
</div>
    );
}
export default Item;