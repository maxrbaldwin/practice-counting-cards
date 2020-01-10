import React from 'react';

export const defaultContext = {
  settings: {
    wtc: {
      decks: 1,
      doubles: true,
    },
    bj: {},
  },
};

const AppContext = React.createContext(defaultContext);

export default AppContext;
