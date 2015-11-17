import React, { Component, PropTypes } from 'react';
import SearchBox from '../components/SearchBox';
import LocationList from '../components/LocationList';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBox />
        <LocationList locations={[{ name: 'Ho Foods', wifi: true }, { name: 'Doppel Standard', wifi: false }]} />
      </div>
    );
  }
};

App.propTypes = {
  // searchFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleLocations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    wifi: PropTypes.boolean
  }))
};

export default App;
