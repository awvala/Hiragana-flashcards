import React, { Component } from "react";
import "./Instructions.css";

class Instructions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className="row instructionContainer">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 welcomeContainer rounded">
                    <h2>Welcome to Hiragana Flash!</h2>
                    <p> Let's drill those Hiragana skills by matching each Hiragana card to its matching English pronunciation.</p>  
                    <h3>Instructions:</h3>
                        <ul>
                            <li>Click either the Hiragana card or the English card.</li>
                            <li>Click its matching card.</li>
                            <li>If you want to cancel your first selection, simply click on it again to de-activate it.</li>
                        </ul> 
                    <button type="submit" className="btn btn-primary beginButton" onClick={this.handleFormSubmit}>Begin!</button>
                </div>
                <div className="col-sm-1"></div>
            </div>
        )
    };
}
export default Instructions;


