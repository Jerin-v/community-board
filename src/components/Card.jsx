import React from "react";

const Card = (props) => {

    return (
        <div className="card">
            <div className="cardBody">
                <img className = "cardImg" src={props.img}></img>
                <h2 className="cardTitle">{ props.title }</h2>
                <p className="cardDesc">{ props.desc }</p>
            </div>
            <button className="cardBtn">View Itinerary</button>

        </div>
    
    )

}


export default Card;