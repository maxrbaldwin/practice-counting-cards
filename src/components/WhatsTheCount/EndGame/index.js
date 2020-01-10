import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Top, CountContainer, Count, CountDesc } from './styles';

class EndGame extends Component {
  constructor(props) {
    super(props);
  }
  getWrongAnswers = discardPile => {
    const wrongs = discardPile.reduce((acc, card) => {
      const { isCorrect } = card;
      const isIncorrect = !isCorrect;
      if (isIncorrect) {
        acc.push(card);
      }
      return acc;
    }, []);

    return (
      <ul>
        {wrongs &&
          wrongs.map(card =>
            <li>
              {`cards: ${card.hand[0].value}, ${card.hand[0].value} user input: ${card.userAnswer} correct answer: ${card.hand[0].highCount + card.hand[1].highCount}`}
            </li>
          )}
      </ul>
    );
  };
  render() {
    const { deckCount, userCount, discardPile } = this.props;
    return (
      <Container>
        <Top>
          <CountContainer>
            <Count>
              {userCount}
            </Count>
            <CountDesc>User Count</CountDesc>
          </CountContainer>
          <CountContainer>
            <Count>
              {deckCount}
            </Count>
            <CountDesc>Deck Count</CountDesc>
          </CountContainer>
        </Top>
        {this.getWrongAnswers(discardPile)}
      </Container>
    );
  }
}

EndGame.propTypes = {
  deckCount: PropTypes.number,
  userCount: PropTypes.number,
  discardPile: PropTypes.arrayOf(PropTypes.shape({})),
};

EndGame.defaultProps = {
  deckCount: 0,
  userCount: 0,
  discardPile: [],
};

export default EndGame;
