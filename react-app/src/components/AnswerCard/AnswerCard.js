import React, { Component } from "react";
import "./AnswerCard.css";

class AnswerCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div
                className={`acard ${this.props.status}`}
                id={`a${this.props.id}`}
                data-id={this.props.id}
                onClick={() => this.props.handleClick("a",this.props.id)}
            >
                <div className="rounded">
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    };
}

export default AnswerCard;