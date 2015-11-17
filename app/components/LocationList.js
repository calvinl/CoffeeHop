import React, { Component, PropTypes } from 'react';
import Location from './Location';

export default class LocationList extends Component {
  render() {
    return (
      <div>
        <h2>Locations</h2>
        <ul>
          {this.props.locations.map((location, index) =>
            // ... spread operator copies the object's props
            // into the Location component's props. (JSX)
            <Location {...location}
                      key={index}
                      onClick={() => this.props.onLocationClick(index)} />
          )}
        </ul>
      </div>
    );
  }
}

LocationList.propTypes = {
  onLocationClick: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    wifi: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
