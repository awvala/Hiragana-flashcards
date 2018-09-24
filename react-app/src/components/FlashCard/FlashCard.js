import React, { Component } from "react";
import "./FlashCard.css";

class FlashCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div
                className={`fcard ${this.props.status}`}
                id={this.props.id}
                onClick={() => this.props.handleClick(this.props.id)}
            >
                <div className="rounded">
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    };
}

export default FlashCard;