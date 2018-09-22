import React from "react";
import "./AnswerCard.css";

const AnswerCard = props => (
    <div className="acard">
        <div className=" rounded" id={props.id} data-status={props.status}>
            <p>{props.name}</p>
        </div>
    </div>
);

export default AnswerCard;