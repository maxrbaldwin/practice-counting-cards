import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CountContainer } from './styles';

class UserCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCount: 0,
      warning: false,
    };
  }
  handleChange = e => {
    this.setState({ userCount: e.target.value });
  };
  setWarning = () => {
    const duration = 5000;
    this.timeout = setTimeout(() => {
      clearTimeout(self.timeout);
      this.setState({ warning: false });
    }, duration);
    this.setState({ warning: true });
  };
  handleSubmission = () => {
    const { userCount } = this.state;
    const validate = regex => regex.test(userCount);
    const expression = RegExp(/^-?\d*$/);

    if (validate(expression)) {
      this.props.handleUserCount(userCount);
    } else {
      this.setWarning();
    }
  };
  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleSubmission();
    }
  };
  render() {
    const { userCount, warning } = this.state;
    return (
      <CountContainer>
        {warning && <div>Positive and negative numbers only</div>}
        <input
          type="text"
          value={userCount}
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        <input type="submit" value="Enter" onClick={this.handleSubmission} />
      </CountContainer>
    );
  }
}

UserCount.propTypes = {
  handleUserCount: PropTypes.func.isRequired,
};

export default UserCount;
