import React from "react";

const Card = (props) => {

    return (
        <div className="card">
            <div className="cardBody">
                <img src={props.img}></img>
                <h2>{ props.title }</h2>
                <p>{ props.desc }</p>
            </div>
            <button>View Itinerary</button>

        </div>
    
    )

}


export default Card;