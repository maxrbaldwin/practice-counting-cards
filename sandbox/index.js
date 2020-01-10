const cards = {
  2: {
    value: 2,
    lowCount: 1,
    highCount: 1,
  },
  3: {
    value: 3,
    lowCount: 1,
    highCount: 2,
  },
  4: {
    value: 4,
    lowCount: 1,
    highCount: 2,
  },
  5: {
    value: 5,
    lowCount: 1,
    highCount: 3,
  },
  6: {
    value: 6,
    lowCount: 1,
    highCount: 2,
  },
  7: {
    value: 7,
    lowCount: 0,
    highCount: 2,
  },
  8: {
    value: 8,
    lowCount: 0,
    highCount: 1,
  },
  9: {
    value: 9,
    lowCount: 0,
    highCount: -1,
  },
  10: {
    value: 10,
    lowCount: -1,
    highCount: -3,
  },
  'j': {
    value: 10,
    lowCount: -1,
    highCount: -3,
  },
  'q': {
    value: 10,
    lowCount: -1,
    highCount: -3,
  },
  'k': {
    value: 10,
    lowCount: -1,
    highCount: -3,
  },
  'a': {
    value: 1,
    highValue: 10,
    lowCount: -1,
    highCount: -3,
  },
}

const getCard = card => ({...cards[card]});

const getDeck = () => {
  const suits = ['heart', 'diamond', 'spades', 'clubs'];
  const typesOfCards = Object.keys(cards);

  return typesOfCards.reduce((acc, cardType) => {
    suits.forEach(suit => {
      const card = getCard(cardType);
      card.type = cardType;
      card.suit = suit;
      acc.push(card);
    });
    return acc;
  }, []);
};

const getShoe = intOfDecks => {
  let shoe = [];

  if (!intOfDecks || typeof intOfDecks !== 'number') {
    return getDeck();
  }

  for (let i=0; i<intOfDecks; i++) {
    const newDeck = getDeck();
    shoe = [...shoe, ...newDeck];
  }

  return shoe;
}
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const multiShuffle = (shoe, intToShuffle) => {
  let emptyShoe;
  for (let i=0; i<intToShuffle; i++) {
    emptyShoe = shuffle(shoe);
  }
  return emptyShoe;
}

const makeShoe = (decks = 8, intToShuffle = 4) => multiShuffle(getShoe(decks), intToShuffle);

const handleSubmit = () => {}


