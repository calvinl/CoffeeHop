import React, { Component, PropTypes } from 'react';

export default class Location extends Component {
  render() {
    return (
      <li onClick={this.props.onClick}>
        <h3>{this.props.name}</h3>
        <p>Has wifi: {this.props.wifi.toString()}</p>
      </li>
    );
  }
}

Location.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  wifi: PropTypes.bool.isRequired
};
