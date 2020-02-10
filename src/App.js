import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: "0",
          eng: "Stack",
          han: "Stack",
          pin: "More details of a Stack"
        },
        {
          id: "1",
          eng: "Queue",
          han: "Queue",
          pin: "More details of a queueu"
        },
        {
          id: "2",
          eng: "LinkedList",
          han: "LinkedList",
          pin: "More details of a LinkedList"
        },
        {
          id: "3",
          eng: "Graph",
          han: "Graph",
          pin: "More details of a Graph"
        },        
      ],
      currentCard: 0
    };

    this.previousCard = this.previousCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
  }

  previousCard(){
    let curIndex = this.state.currentCard;
    let lens = this.state.cards.length;
    curIndex = --curIndex < 0 ? lens-1 : curIndex;
    this.setState({
      currentCard: curIndex
    })
  }

  nextCard() {
    let curIndex = this.state.currentCard;
    let lens = this.state.cards.length;
    curIndex = ++curIndex >= lens ? 0 : curIndex;
    this.setState({
      currentCard: curIndex
    })
  }

  render() {
    const currentCard = this.state.cards[this.state.currentCard];
    return (
      <div className="App">
        <div className="cardRow">
          <Card eng={currentCard.eng}
                han={currentCard.han}
                pin={currentCard.pin}
          >
          </Card>
        </div>
        <div className="btnGroup">
          <div className="buttonRow">
            <DrawButton drawCard={this.previousCard} title={"previous"} />
          </div>
          <div className="buttonRow">
            <DrawButton drawCard={this.nextCard} title={"next"}/>
          </div>  
        </div>

      </div>
    );
  }

}

export default App;
