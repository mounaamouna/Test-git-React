import React from "react";



const CardFeedBack = ({ Name, Rating, Comments, img }) => {

 
    return (
        <div className="card" >
            <p> Name: {Name}</p>
            <p> Rating:<br />{Rating}</p>
            <p> Comment:<br />{Comments}</p>
            <img src={img}  />

        </div>
    )



}
export default CardFeedBack