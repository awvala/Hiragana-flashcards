import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
    state = {
        begin: false,
        correct: 0,
        score: 0
    };

    // Click the begin button to remove the Begin button and show the Cards matched counter
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        if (this.state.begin === false) {
            this.setState({
                begin: true
            });
        };
    };

    render() {
        return (
            <nav className="navbar navbar-expand-sm fixed-top navbar-dark bg-dark">
                <div className="navcontainer">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="navbar-brand" href="/">Hiragana Flash!</a>
                            { // Ternarry to conditionally show the begin button or matched cards counter
                                this.state.begin === false
                                    /* If begin === false*/
                                    ? <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Begin!</button>
                                    /* else begin != false*/
                                    : <div className="second-nav">
                                        <span class="navbar-text">{this.state.result}</span>
                                        <span class="navbar-text">Correct: {this.state.correct}</span>
                                        <span class="navbar-text">Best Score: {this.state.score}</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    };
}

export default Nav;
