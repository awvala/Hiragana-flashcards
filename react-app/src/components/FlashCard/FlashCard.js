import React from "react";
import "./FlashCard.css";

const FlashCard = props => (
    <div className="fcard">
        <div className=" rounded" id={props.id} data-status={props.status}>
            <p>{props.name}</p>
        </div>
    </div>
);

export default FlashCard;