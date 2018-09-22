import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const correct = this.props.correct;
        const result = this.props.result;
        const score = this.props.score;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Hiragana Flash!</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="nav nav-fill">
                            <li className="nav-item navbar-text">Correct: {correct}</li>
                            <li className="nav-item navbar-text">Best Score: {score}</li>
                            <li className="nav-item navbar-text">  {result}</li>
                        </ul>
                    </div>
                
            </nav>
        )
    };
}
export default Nav;


