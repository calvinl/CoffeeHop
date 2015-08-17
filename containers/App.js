import React, { Component } from 'react';
// import SearchBox from '../components/SearchBox';
import LocationList from '../components/LocationList';

export default class App extends Component {
  render() {
    return (
      <div>
        <LocationList locations={[{ name: 'Ho Foods', wifi: true }, { name: 'Doppel Standard', wifi: false }]} />
      </div>
    );
  }
}
