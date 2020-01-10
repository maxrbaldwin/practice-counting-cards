import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card } from './styles';

function Deck(props) {
  const { hand } = props;
  console.log('hand', hand);
  return (
    <Fragment>
      {hand.length &&
        hand.map(card =>
          <Card {...card}>
            <div dangerouslySetInnerHTML={{ __html: card.html }} />
          </Card>
        )}
    </Fragment>
  );
}

Deck.propTypes = {
  hand: PropTypes.shape({}),
};

Deck.defaultProps = {
  hand: {},
};

export default Deck;
