import React, { Component, PropTypes } from 'react';
import * as SearchFilters from '../constants/SearchFilters';

export default class SearchBox extends Component {
  render() {
    return (
      <form>
        <p>Search Filters:</p>
        {SearchFilters.map((sf, index) =>
          <input type="checkbox" value="{sf}" /> {sf}
        )};
      </form>
    );
  }
};
