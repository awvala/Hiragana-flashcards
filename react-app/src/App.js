import React, { Component } from 'react';
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import Instructions from "./components/Instructions";
import FlashCard from "./components/FlashCard";
import AnswerCard from "./components/AnswerCard";

const initCardsArr = [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"],
["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"],
["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"],
["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"],
["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"], ["ん", "n"],
["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"],
["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"],
["や", "ya"], ["ゆ", "yu"], ["よ", "yo"],
["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"],
["わ", "wa"], ["を", "wo"],
["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"],
["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"],
["だ", "da"], ["ぢ", "dji"], ["づ", "dzu"], ["で", "de"], ["ど", "do"],
["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"],
["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]
];

let unshuffledHiraArr = [];
let unshuffledEnglArr = [];

class App extends Component {
  // Set Initial state
  state = {
    hiraCards: [],
    englCards: [],
    begin: false,
    result: "",
    correct: 0,
    score: 0,
    pendingID: ""
  }

  combineNewArray = (newArray) => {
    let i;
    for (i = 0; i < newArray.length; i++) {
      unshuffledHiraArr.push([newArray[i][0], i]);
      unshuffledEnglArr.push([newArray[i][1], i]);
    }
  };

  // Click the begin button to remove the Begin button and show the Cards matched counter
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.state.begin === false) {
      console.log("running handleFormSubmit");
      this.setState({
        begin: true,
      });
      // Combine hiragana characters into a single array.
      this.combineNewArray(initCardsArr);
      // Shuffle single array
      let hirashuffledCards = this.shuffleArray(unshuffledHiraArr);
      let englshuffledCards = this.shuffleArray(unshuffledEnglArr);
      this.setState({
        hiraCards: hirashuffledCards,
        englCards: englshuffledCards,
        result: ""
      });
    };
  };

  // Fisher Yates shuffle array
  shuffleArray = paramArray => {
    let currentIndex = paramArray.length, tempValue, randomIndex;

    // While there remain elements to shuffle…
    while (0 !== currentIndex) {

      // Pick a remaining element…
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      tempValue = paramArray[currentIndex];
      paramArray[currentIndex] = paramArray[randomIndex];
      paramArray[randomIndex] = tempValue;
    }
    return paramArray;
  };

  handleClick = id => {
    // Check if pendingId is empty
    if (this.state.pendingID === "") {
      // update pendingId and change status to pending
      console.log("New id: " + id);
      var element = document.getElementById(id);
      element.classList.add("pending");
      this.setState ({
      pendingID: id
      });
    } else if (this.state.pendingID === id) {
      // Increment score
      console.log("Match id: " + this.state.pendingID);
      this.handleIncrement();
      this.setState({
        pendingID: ""
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    let newScore = this.state.correct + 1;
    this.setState({
      correct: newScore,
      result: "Correct!",
    });
    if (newScore >= this.state.score) {
      this.setState({
        score: newScore
      });
    } else if (newScore === initCardsArr.length) {
      this.setState({
        result: "Well done!"
      });
    }
    this.shuffleArray();
  };

  handleReset = () => {
    this.setState({
      begin: false,
      shuffledHiraCards: [],
      shuffledEnglCards: [],
      result: "Incorrect, try again!",
      correct: 0,
      pendingID: ""
    });
    unshuffledHiraArr = [];
    unshuffledEnglArr = [];
    this.combineNewArray(initCardsArr);
  };

  render() {
    return (
      <div className="Container">
        <Nav
          result={this.state.result}
          correct={this.state.correct}
          score={this.state.score}
        />

        { // Ternarry to conditionally show welcome message or populated flashcards
          this.state.begin === true
            ? <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                {/*Hiragana cards*/}
                <CardContainer>
                  {this.state.hiraCards.map((card) => <FlashCard
                    key = {card[1]}
                    name={card[0]}
                    id={card[1]}
                    status="unmatched"
                    handleClick={this.handleClick}
                  />
                  )}
                </CardContainer>
              </div>

              <div className="col-sm-5">
                {/*English cards*/}
                <CardContainer>
                  {this.state.englCards.map((card) => <AnswerCard
                    key = {card[1]}
                    name={card[0]}
                    id={card[1]}
                    status="unmatched"
                    handleClick={this.handleClick}
                  />
                  )}
                </CardContainer>
              </div>
              <div className="col-sm-1"></div>
            </div>
            /* else show instructions */
            : <Instructions
              handleFormSubmit={this.handleFormSubmit}
            />
        }
      </div>
    );
  }
}

export default App;
