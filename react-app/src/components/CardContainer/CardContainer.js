import React from "react";
import "./CardContainer.css";

const CardContainer = props => <div className="cardContainer rounded">{props.children}</div>;

export default CardContainer;