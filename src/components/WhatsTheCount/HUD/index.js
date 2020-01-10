import React from 'react';
import PropTypes from 'prop-types';
import { HeadsUpDisplay } from './styles';

function HUD(props) {
  const { userCount, deckCount, trueCount, remainingCards } = props;
  return (
    <HeadsUpDisplay>
      {/* <li>
        UserCount: {userCount}
      </li>
      <li>
        Deckcount: {deckCount}
      </li>
      <li>
        TrueCount: {trueCount}
      </li> */}
      <li>
        Cards Remain: {remainingCards}
      </li>
    </HeadsUpDisplay>
  );
}

HUD.propTypes = {
  userCount: PropTypes.number,
  deckCount: PropTypes.number,
  trueCount: PropTypes.number,
  remainingCards: PropTypes.number,
};

HUD.defaultProps = {
  userCount: 0,
  deckCount: 0,
  trueCount: 0,
  remainingCards: 0,
};

export default HUD;
