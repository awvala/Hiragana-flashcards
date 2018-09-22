import React, { Component } from 'react';
import Nav from "./components/Nav";
import CardContainer from "./components/CardContainer";
import FlashCard from "./components/FlashCard";
import AnswerCard from "./components/AnswerCard";

const initCardsArr = [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "i"],
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

const shuffleCardArr = [];

class App extends Component {
  // Set Initial state
  state = {
    result: "",
    correct: 0,
    score: 0,
    pendingID: ""
  }

  render() {
    return (
      <div className="Container">
        <Nav
          result={this.state.result}
          correct={this.state.correct}
          score={this.state.score}
        />
        <div className="row">
        <div className="col-sm-1"></div>
          <div className="col-sm-5">
            {/*Hiragana cards*/}
            <CardContainer>
              {initCardsArr.map((card, index) => <FlashCard
                name={card[0]}
                id={card.index}
                status="unmatched"
              />
              )}
            </CardContainer>
          </div>
          
          <div className="col-sm-5">
            {/*English cards*/}
            <CardContainer>
              {initCardsArr.map((card, index) => <AnswerCard
                name={card[1]}
                id={card.index}
                status="unmatched"
              />
              )}
            </CardContainer>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default App;
