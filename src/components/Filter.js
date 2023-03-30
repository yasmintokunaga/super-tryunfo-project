import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

class Filter extends React.Component {
  render() {
    const { filterName, filterRare, filterTrunfo, onInputChangeFilter } = this.props;
    return (
      <div className="filters">
        <span><strong>Filtros </strong></span>
        <label htmlFor="filterName" className="filter">
          Nome:
          <input
            data-testid="name-filter"
            type="text"
            name="filterName"
            id="filterName"
            value={ filterName }
            onChange={ onInputChangeFilter }
            disabled={ filterTrunfo }
          />
        </label>

        <label htmlFor="filterRare" className="filter">
          Raridade:
          <select
            data-testid="rare-filter"
            name="filterRare"
            id="filterRare"
            value={ filterRare }
            onChange={ onInputChangeFilter }
            disabled={ filterTrunfo }
          >
            <option value="">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="filterTrunfo" className="filter">
          SuperTrunfo
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            id="filterTrunfo"
            checked={ filterTrunfo }
            onChange={ onInputChangeFilter }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
