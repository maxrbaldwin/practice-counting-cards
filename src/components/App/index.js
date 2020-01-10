import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppContext, { defaultContext } from '@components/AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultContext,
    };
  }
  updateSettings = newSettings => {
    this.setState({ settings: newSettings });
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          updateSettings: this.updateSettings,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  children: {},
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
