import React, { Component, PropTypes } from 'react';
import * as SearchFilters from '../constants/SearchFilters';

export default class SearchBox extends Component {

  setFilter(searchFilter) {
    console.log(searchFilter, 'clicked');
  }

  render() {
    return (
      <form>
        <p>Search Filters:</p>
        {Object.keys(SearchFilters).map((searchFilter, idx) =>
          <p>
            <input onClick={this.setFilter(searchFilter)} type="checkbox" value="{searchFilter}" /> {searchFilter}
          </p>
        )}
      </form>
    );
  }
};

SearchBox.propTypes = {
  onClick: PropTypes.func.isRequired
};
