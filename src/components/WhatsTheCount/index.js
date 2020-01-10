import React, { Component } from 'react';
import UserCount from '@WTC/UserCount';
import Deck from '@WTC/Deck';
import HUD from '@WTC/HUD';
import EndGame from '@WTC/EndGame';
import makeShoe from '@deckUtils';
import AppContext from '@components/AppContext';
import { Container } from './styles';

class WhatsTheCount extends Component {
  constructor(props, context) {
    const { settings: { wtc: { decks } } } = context;
    super(props, context);
    const shoe = makeShoe(decks, context);
    const firstCards = shoe.getNextCards();
    const startingDeckCount = shoe.getTheCount(firstCards, 0);
    this.state = {
      // @TODO: If user wants to practice low count
      userCount: 0,
      deckCount: startingDeckCount,
      trueCount: shoe.getTrueCount(startingDeckCount),
      hand: firstCards,
      discard: [],
    };
    this.shoe = shoe;
  }
  // Use this to track progess
  getDiscardPile = (nextUserCount, deckCount) => {
    const { discard, hand, userCount } = this.state;
    const compareUserCount = () => {
      const cardCount = hand[0].highCount + hand[1].highCount;
      // subtract the user's current submission with the previous user count to
      // calculate the user's input
      const userAnswer = nextUserCount - userCount;
      return {
        isCorrect: userAnswer === cardCount,
        userAnswer,
      };
    };

    return [
      ...discard,
      {
        ...compareUserCount(nextUserCount, deckCount),
        userCount,
        hand,
        deckCount,
      },
    ];
  };
  getNextHand = userCount => {
    const { deckCount } = this.state;
    const discardPile = this.getDiscardPile(userCount, deckCount);
    const nextHand = this.shoe.getNextCards();
    // @TODO: If user wants to practice low count
    const nextDeckCount = this.shoe.getTheCount(nextHand, deckCount);
    const nextTrueCount = this.shoe.getTrueCount(nextDeckCount);

    this.setState({
      userCount,
      deckCount: nextDeckCount,
      trueCount: nextTrueCount,
      hand: nextHand,
      discard: discardPile,
    });
    return nextHand;
  };
  handleUserCount = userCount => {
    this.getNextHand(Number(userCount));
  };
  checkEnd = () => this.state.discard.length === this.shoe.startTotal / 2;
  render() {
    const { userCount, deckCount, trueCount, hand, discard } = this.state;
    if (this.checkEnd()) {
      return <EndGame deckCount={deckCount} userCount={userCount} discardPile={discard} />;
    }
    return (
      <Container>
        <UserCount handleUserCount={this.handleUserCount} />
        <Deck hand={hand} />
        <HUD
          userCount={userCount}
          deckCount={deckCount}
          trueCount={trueCount}
          remainingCards={this.shoe.getCardsRemaining()}
        />
      </Container>
    );
  }
}

WhatsTheCount.contextType = AppContext;

export default WhatsTheCount;
