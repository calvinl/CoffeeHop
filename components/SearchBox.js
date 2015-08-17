import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <LocationList locations="[{ name: 'Ho Foods', wifi: true }, { name: 'Doppel Standard', wifi: false }]" />
      </div>
    );
  }
}
